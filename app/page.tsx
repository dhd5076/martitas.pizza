import Image from "next/image";
import headingFont from "./layout";
import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-screen-lg mx-auto drop-shadow-xl">
      <div className="bg-[url('/pizzabg.png')] bg-left bg-contain">
        <div className="flex items-center justify-center bg-linear-to-r from-black/0 from-10% to-taupe-200 to-40%">
            <div className="flex flex-col items-center">
              <div className="flex w-full justify-end gap-8 pr-16 pr-4">
                <Link href="/" className={`text-lg text-olive-900 font-(family-name:--font-heading) font-black tracking-widest mt-4 mb-8`}> Home</Link>
                <Link href="/" className={`text-lg text-olive-900 font-(family-name:--font-heading) font-black tracking-widest mt-4 mb-8`}> Our Story</Link>
                <Link href="/" className={`text-lg text-olive-900 font-(family-name:--font-heading) font-black tracking-widest mt-4 mb-8`}> Contact Us</Link>
              </div>
              <Image  className="-mb-24 -mt-36" src="/martitaspizza.png" alt="Martita's Pizza" width={400} height={400}/>
              <h1 className={`text-olive-900 text-4xl font-(family-name:--font-heading) font-semibold text-center`}> A Slice Above Reason.</h1>
              <p className={`text-olive-900 font-(family-name:--font-heading) mt-4 w-1/3 text-center`}> Born from an ongoing joke and elevated into a completely unneccary culinary vision Martita's Pizza delivers handcrafted pies, bold flavors, and an uncalled for amount of confidence.</p>
              <div className="m-4 mb-16">
                <button className="bg-red-900 text-olive-200 border border-white px-4 py-2 mr-4 rounded font-(family-name:--font-heading) font-black tracking-widest">VIEW MENU</button>
                <button className="bg-amber-100 text-olive-900 border border-olive-900 px-6 py-2 rounded font-(family-name:--font-heading) font-black tracking-widest">ORDER NOW</button>
              </div>
            </div>
        </div>
      </div>
      <div className="bg-right bg-contain">
        <div className="flex items-left">
            <div className="flex flex-col w-1/2 pt-4 bg-taupe-200">
              <h1 className={`text-red-900 text-4xl font-(family-name:--font-heading) font-semibold text-center mt-4`}> How did we get here?</h1>
              <p className={`text-olive-900 font-(family-name:--font-heading) mt-4 px-8 text-center`}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              <Image src="/linebreak.png" alt="linebreak" width={400} height={100} className="self-center -m-24"/>
              <h1 className="text-olive-700 text-3xl font-(family-name:--font-heading) text-center mt-0"> Our Signature Items</h1>
            <p className="text-olive-900 text-sm font-(family-name:--font-heading) text-center"> Crafted for the connoisseur of questionable life choices</p>
            </div>
            <div className="w-1/2 bg-olive-200">
              <Image src="/lady2.png" alt="pizza slice" width={1600} height={1600} className=""/>
            </div>
        </div>
      </div>
      <div className="bg-taupe-200 flex items-center justify-center">
        <div className="w-1/4 p-2 shadow-2xl m-4 bg-taupe-100  border border-olive-300  rounded-b-xl">
          <Image src="/pizza.png" alt="pizza" width={400} height={400} />
          <h1 className="text-lg font-(family-name:--font-heading) text-red-900 font-bold text-center mt-2"> The Martita Margherita</h1>
          <p className="text-olive-900 font-(family-name:--font-heading) text-center font-md leading-4 tracking-tight p-2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <p className="text-2xl text-olive-900 text-center font-(family-name:--font-heading) font-black mb-2"> $19.99</p>
        </div>
        <div className="w-1/4 p-2 shadow-2xl m-4 bg-taupe-100 border border-olive-300 rounded-b-xl">
          <Image src="/filet.png" alt="pizza" width={400} height={400} />
          <h1 className="text-lg font-(family-name:--font-heading) text-red-900 font-bold text-center mt-2"> The Filet Quesadilla</h1>
          <p className="text-olive-900 font-(family-name:--font-heading) text-center font-md leading-4 tracking-tight p-2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <p className="text-2xl text-olive-900 text-center font-(family-name:--font-heading) font-black mb-2"> <i>40.00</i></p>
        </div>
        <div className="w-1/4 p-2 shadow-2xl m-4 bg-taupe-100  border border-olive-300 rounded-b-xl">
          <Image src="/pizza.png" alt="pizza" width={400} height={400} />
          <h1 className="text-lg font-(family-name:--font-heading) text-red-900 font-bold text-center mt-2"> The Martita Margherita</h1>
          <p className="text-olive-900 font-(family-name:--font-heading) text-center font-md leading-4 tracking-tight p-2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <p className="text-2xl text-olive-900 text-center font-(family-name:--font-heading) font-black mb-2"> 20.00</p>
        </div>
      </div>
      <div className="bg-taupe-200 items-center justify-center flex"> 
        <Image src="/linebreak.png" alt="linebreak" width={400} height={100} className="self-center -m-24"/>
      </div>
      <div className="bg-taupe-200 flex justify-center box-shadow-xl">
        <div className="font-(family-name:--font-heading) text-center mx-auto p-8">
          <h1 className="text-red-950 text-2xl font-semibold text-center pt-8">"At some point the joke had gone too far. So we decided to respect the joke."</h1>
          <p className="text-olive-900 text-center mt-0"> &mdash; <b className="text-lg">Martita Richardson</b>, Founder and Culinary Visionary</p>
        </div>
      </div>
    </div>
  );
}
