import { useEffect  } from 'react';
import { useRouter } from 'next/router';
function IndexPage() {
  const router = useRouter()
  console.log(router.query)
  useEffect(() => {
    
  })

  return (
    <div>
      <p>Hello, I'm the Product</p>
    </div>
  )
}

export default IndexPage
