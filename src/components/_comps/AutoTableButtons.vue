<template>
  <div>
    <AutoButton class="mg5"
    v-for="(button,i) in buttons2"
    :key="button.title"
    v-if="button.showbtn"
    :prompt="`确认要${button.title}吗？`"
    v-bind="button"
    :load="() => buttons2[i].click(row)"
    > {{button.title}} </AutoButton>
  </div>
</template>

<script>

export default {
  props: ['buttons', 'row'],
  data () {
    return {
      buttons2: this.buttons.map((b, i, arr) => ({
        ...b,
        size: 'small',
        loading: false,
        showbtn: this.buttons[i].showbtn === undefined ? true : this.buttons[i].showbtn
      }))
    }
  }
}
</script>
