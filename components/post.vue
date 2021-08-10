<template>
  <div class="post-container">
    <PostStats
      class="votes"
      :user-vote="userVote"
      :views="post.views"
      :votes="votes"
      :disable-voting="disableVoting"
      @user-vote="vote"
    />

    <div class="change">
      <InlineChange :change="typeOfPost" /><br />
      <InlineChange :change="post.change" />
    </div>

    <PostContent
      class="content"
      :content="post.content"
      :content-type="post.contentType"
    />

    <InlineTags v-if="post.tags" :tags="post.tags" />

    <div class="buttons">
      <BaseButton color="success">Odpowiedz</BaseButton>
      <BaseButton>Skomentuj</BaseButton>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'
import { InlineQuestionDto, QuestionDto } from '~/services/__generated-api'

export default Vue.extend({
  props: {
    post: {
      type: Object as PropType<QuestionDto>,
      required: true,
    },
  },
  data() {
    return {
      isUserVoting: false,
      userVote: this.post.userVote,
      votes: this.post.votes,
    }
  },
  computed: {
    typeOfPost(): InlineQuestionDto['change'] {
      return {
        type: 'question_created',
        // @ts-ignore TODO
        date: this.post.createDate,
        user: this.post.author,
      }
    },
    disableVoting(): boolean {
      const userId = this.$accessor.currentUser?.id
      const authorId = this.post.author?.id
      return !userId || userId === authorId
    },
  },
  methods: {
    async vote(vote: -1 | 0 | 1) {
      if (this.isUserVoting) return
      this.isUserVoting = true

      const { userVote, votes } = await this.$httpService.questions.vote(
        `${this.post.id}`,
        { vote }
      )

      this.userVote = userVote
      this.votes = votes
      this.isUserVoting = false
    },
  },
})
</script>

<style lang="scss" scoped>
.post-container {
  position: relative;
  padding: size(5) size(40) size(10) size(85);
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

.buttons {
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid var(--question--divider--color);
}

.votes {
  position: absolute;
  top: 10px;
  left: 0;
}
</style>
