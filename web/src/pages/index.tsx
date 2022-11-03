interface HomeProps {
  count: number;
}

import appPreviewImg from '../assets/aplicacao-trilha-ignite.png'

export default function Home(props: HomeProps) {

  return (
    <div>
      <main>

      </main>

      <img src={appPreviewImg} alt="Celulares preview" />
    </div>

  )
}

export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3333/pools/count')
  const data = await response.json()

  console.log(data)
  
  return {
    props: {
      count: data.count,
    }
  }
}