const app = new Vue(
    {
      el: '#root',
      data: {
        titolo: 'Buongiorno, Vietnam!',
        imgSrc: 'https://api.superguidatv.it/v1/movies/12554/backdrops/1?width=720'
    },
    methods: {
        toUpper(text){
          return text.toUpperCase()
        },
      }
    }
  )