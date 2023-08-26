console.log("axios.js")
// this.$axios.setHeader('Authorization', 'Bearer ' + this.$auth.strategy.token.get())

export default function ({ $axios, error: nuxtError }) {
    $axios.onError(error => {
      nuxtError({
        statusCode: error.response.status,
        message: error.message,
      });
      return Promise.resolve(false);
    })
    let accessToken = false
    if (!accessToken) {
        $axios.setHeader('newAuthorization', 'Bearer sadsdasdhas')
      }

  }

