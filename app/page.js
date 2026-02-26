import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full flex-col py-12 px-16 items-start">
        <h1 className="text-sm font-bold text-center lg:text-5xl">
          Welcome to My Film Database</h1>
        <div className="mt-8 flex gap-5 flex-wrap items-start justify-center [&_img]:w-24 lg:[&_img]:w-48">
          <div>
            <Image
              src="/db.png"
              alt="Vercel Logo"
              className="mb-4 w-48 rounded-2xl hover:opacity-75 transition-opacity"
              width={192}
              height={48}
            />
            <p className="text-sm text-center lg:text-sm">
              Welcome to My Film
            </p>
          </div>
          <div>
            <Image
              src="/db.png"
              alt="Vercel Logo"
              className="mb-4 w-48 rounded-2xl hover:opacity-75 transition-opacity"
              width={192}
              height={48}
            />
            <p className="text-sm text-center lg:text-sm">
              Welcome to My Film
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
