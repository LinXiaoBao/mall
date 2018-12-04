<template>
  <div class="main">
    <!--视频为背景，打印text-->
    <div class="container">
      <h3>This is <span>{{tempWords}}</span><span>|</span></h3>
    </div>

    <video class="bg_video" src="../../static/videoCity.mp4" width="100%" autoplay loop muted></video>

  </div>
</template>

<script>
export default {
  data () {
    return {
      types: ['a Blog.', 'Not Just a Blog.', "Apple's Blog."],
      tempWords: '',
      stopType: false,
      time: 200,
      arrIndex: 0,
      index: 0,
      textDirection: 'r' // r:right l: right
    }
  },
  created () {
    this.setTempWords()
  },
  methods: {
    setTempWords () {
      this.tempWords = this.types[this.arrIndex].substring(0, this.index)

      if (this.textDirection === 'r') {
        if (this.index === this.types[this.arrIndex].length) {
          this.textDirection = 'l'
        }
        this.index++
      }

      if (this.textDirection === 'l') {
        if (this.tempWords.length === 0) {
          this.arrIndex++
          this.arrIndex = this.arrIndex % 3
          this.textDirection = 'r'
        } else {
          this.index--
        }
      }

      setTimeout(() => {
        this.setTempWords()
      }, this.time)
    }
  }
}
</script>

<style lang="scss" scoped>
  .main {
    position: relative;
    .container {
      position: absolute;
      top: 400px;
      left: 400px;
      h3 {
        color: #d7d8dd;
        font-weight: 700;
        font-size: 56px;
        span {
          color: darkorange;
        }
      }
    }
    .bg_video {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
  }
</style>
