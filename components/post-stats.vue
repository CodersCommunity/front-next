<template>
  <div class="stats-wrap">
    <div class="boxes-wrap">
      <!-- Vote box -->
      <div
        class="box box--votes"
        :class="{
          vote: showVoteButtons,
          'vote--voted-up': userVote == 1,
          'vote--voted-down': userVote == -1,
        }"
      >
        <div v-if="showVoteButtons" class="vote__buttons">
          <button
            class="vote__button vote__button--up"
            title="Oddaj głos w górę"
            @click="voteUp"
          >
            <span class="triangle triangle--up" />
            <span class="visually-hidden">Oddaj głos w górę na to pytanie</span>
          </button>
          <button
            class="vote__button vote__button--down"
            title="Oddaj głos w dół"
            @click="voteDown"
          >
            <span class="triangle triangle--down" />
            <span class="visually-hidden">Oddaj głos w dół na to pytanie</span>
          </button>
        </div>
        <div>
          <div class="number">{{ votes }}</div>
          {{ $pluralization(votes, 'głos', 'głosy', 'głosów') }}
        </div>
      </div>
      <!-- e/o Vote box -->

      <!-- Answers box -->
      <div
        v-if="answers !== null"
        class="box box--answers"
        :class="{
          'box--no-answers': answers === 0,
          'box--best-answer': hasBestAnswer,
        }"
      >
        <div class="number">{{ answers }}</div>
        {{ $pluralization(answers, 'odpowiedź', 'odpowiedzi', 'odpowiedzi') }}
      </div>
    </div>
    <!-- e/o Answers box -->

    <!-- Views info -->
    <div v-if="views !== null" class="views">
      {{ views }}
      {{ $pluralization(views, 'wizyta', 'wizyty', 'wizyt') }}
    </div>
    <!-- e/o Views info -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    votes: {
      type: Number,
      required: true,
    },
    answers: {
      type: Number,
      default: null,
    },
    views: {
      type: Number,
      default: null,
    },
    hasBestAnswer: {
      type: Boolean,
      default: false,
    },
    userVote: {
      type: Number,
      default: null,
      validator(userVote) {
        return [-1, 0, 1].includes(userVote)
      },
    },
    disableVoting: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    showVoteButtons(): boolean {
      return this.userVote !== null && !this.disableVoting
    },
  },
  methods: {
    voteUp() {
      this.$emit('user-vote', this.userVote === 0 ? 1 : 0)
    },
    voteDown() {
      this.$emit('user-vote', this.userVote === 0 ? -1 : 0)
    },
  },
})
</script>

<style lang="scss" scoped>
.stats-wrap {
  font-size: size(11);
  text-align: center;
}

.boxes-wrap {
  display: flex;
  margin-bottom: size(6);
}

.box {
  width: size(67);
  height: size(67);
  color: var(--question--answers-number--text-color);
  background-color: var(--question--answers-number--background-color);

  &--votes {
    color: var(--question--votes--text-color);
    background-color: var(--question--votes--background-color);
  }

  &--no-answers {
    color: var(--question--answers-number--no-answers--text-color);
    background-color: var(
      --question--answers-number--no-answers--background-color
    );
  }

  &--best-answer {
    background-color: var(
      --question--answers-number--with-best-answer--background-color
    );
  }
}

.number {
  font-size: size(22);
  line-height: size(43);
}

.vote {
  display: flex;

  &__buttons {
    width: 26px;
    margin-top: 10px;
  }

  &__button {
    display: block;
    border: none;
    background: none;

    padding: 5px;

    transition: all 0.2s;

    &--up:hover .triangle--up {
      border-bottom-color: var(--button--success--hover--background-color);
    }

    &--down {
      margin-top: size(3);

      &:hover .triangle--down {
        border-top-color: var(--button--error--hover--background-color);
      }
    }
  }

  &--voted-up {
    .vote__button--up {
      transform: translateY(size(10));
    }

    .vote__button--down {
      opacity: 0;
      visibility: hidden;
    }

    .triangle--up {
      border-bottom-color: var(--button--success--hover--background-color);
    }
  }

  &--voted-down {
    .vote__button--down {
      transform: translateY(size(-10));
    }

    .vote__button--up {
      opacity: 0;
      visibility: hidden;
    }

    .triangle--down {
      border-top-color: var(--button--error--hover--background-color);
    }
  }
}

.triangle {
  display: block;
  width: 0;
  height: 0;
  position: relative;
  transition: border-color 0.15s;

  $triangle-size: size(9);

  &--down {
    border-left: $triangle-size solid transparent;
    border-right: $triangle-size solid transparent;
    border-top: 1.3 * $triangle-size solid #3d79ac;
    left: -1px;
  }

  &--up {
    border-left: $triangle-size solid transparent;
    border-right: $triangle-size solid transparent;
    border-bottom: 1.3 * $triangle-size solid #3d79ac;

    left: -1px;
  }
}
</style>
