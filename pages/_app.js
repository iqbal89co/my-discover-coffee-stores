import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
      <footer><h1>Footer's right here</h1></footer>
    </div>
  )
}

export default MyApp
