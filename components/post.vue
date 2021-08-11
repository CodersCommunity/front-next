<template>
  <div
    class="post-container"
    :class="{ 'post-container--comment': postType === 'comment_created' }"
  >
    <PostStats
      v-if="postType !== 'comment_created'"
      class="votes"
      :user-vote="userVote"
      :views-count="post.viewsCount"
      :votes-count="votesCount"
      :disable-voting="isCurrentUserTheAuthorOfThisPost"
      @user-vote="vote"
    />

    <div class="change">
      <InlineChange :change="creationInfo" /><br />
      <InlineChange v-if="showChangeInfo" :change="post.change" />
    </div>

    <PostContent
      class="content"
      :content="post.content"
      :content-type="post.contentType"
    />

    <InlineTags v-if="post.tags" :tags="post.tags" />

    <PostButtons
      :is-comment="postType === 'comment_created'"
      :is-question="postType === 'question_created'"
      :can-report="isCurrentUserTheAuthorOfThisPost"
    />

    <section
      v-if="post.comments && post.comments.length > 0"
      :id="`komentarze-post-${post.id}`"
      class="comments"
    >
      <ol class="reset-list">
        <Box
          v-for="comment in post.comments"
          :id="`c${comment.id}`"
          :key="comment.id"
          tag="li"
          dark
        >
          <Post :post="comment" post-type="comment_created" />
        </Box>
      </ol>
    </section>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { AnswerDto, CommentDto, QuestionDto } from '~/services/__generated-api'

export default Vue.extend({
  props: {
    post: {
      type: Object as PropType<QuestionDto & AnswerDto & CommentDto>,
      required: true,
    },
    postType: {
      type: String as PropType<QuestionDto['change']['type']>,
      required: true,
    },
  },
  data() {
    return {
      isUserVoting: false,
      userVote: this.post.userVote,
      votesCount: this.post.votesCount,
    }
  },
  computed: {
    creationInfo(): QuestionDto['change'] {
      return {
        type: this.postType,
        date: this.post.createDate,
        user: this.post.author,
      }
    },
    isCurrentUserTheAuthorOfThisPost(): boolean {
      const userId = this.$accessor.currentUser?.id
      const authorId = this.post.author?.id
      return !!userId && userId === authorId
    },
    showChangeInfo(): boolean {
      const createTypes: Array<QuestionDto['change']['type']> = [
        'question_created',
        'answer_created',
        'comment_created',
      ]

      return this.post.change && !createTypes.includes(this.post.change.type)
    },
  },
  methods: {
    async vote(vote: -1 | 0 | 1) {
      if (this.isUserVoting) return
      this.isUserVoting = true

      const { userVote, votes } = await this.$httpService.questions.vote(
        this.post.id,
        { vote }
      )

      this.userVote = userVote
      this.votesCount = votes
      this.isUserVoting = false
    },
  },
})
</script>

<style lang="scss" scoped>
.post-container {
  position: relative;
  padding: size(5) size(40) size(10) size(85);

  &--comment {
    padding: size(5) 0;
    font-size: size(14);
  }
}

.change {
  line-height: 1.3;
  padding-bottom: 6px;
  margin-bottom: 10px;
  border-bottom: 1px solid var(--question--divider--color);
}

.content {
  margin-bottom: 20px;
}

.votes {
  position: absolute;
  top: 10px;
  left: 0;
}

.comments {
  margin-top: size(20);
}
</style>
