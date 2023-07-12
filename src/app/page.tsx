import Providers from "@/components/Providers";
import Claim from "@/components/Claim";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white text-black">
      <div className="w-full max-w-5xl">
       <Providers
       modalImage={'https://picsum.photos/482/560'} //Change this to your image
       utilityId={'37a4edbc-ed7b-40e0-8705-9d3cba86cc69'}
       >
            <Claim/>
       </Providers>
      </div>
    </main>
  )
}
