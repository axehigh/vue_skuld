<template>
  <div class="page1">

    <h3>Badgecount: {{badgeCount}}</h3>

    <md-badge v-bind:md-content="badgeCount">
      <md-button class="md-raised"
                 v-on:click="badgeIncrease">Badge
      </md-button>
    </md-badge>

    <md-button class="md-raised md-accent"
               v-on:click="goTo">Home
    </md-button>
  </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        methods: {
            goTo: function (event) {
                this.$router.push({name: 'HelloWorld'});
            },
            badgeIncrease: function (event) {
                this.badgeCount++;
                console.info(this.badgeCount);
            }
        },
        data() {
            return {
                badgeCount: 0,
                msg: 'Page 1',
            }
        }

    }
</script>
