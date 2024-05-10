export default function AboutPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-10 md:justify-between md:gap-8">
        <section className="flex items-center w-full justify-around">
          <img
            src="/me.jpeg"
            alt="my profile picture"
            width={200}
            height={200}
            className="rounded-sm hidden md:block"
          />
          <div className="w-2/5">
            <h1 className="inline-block font-black text-4xl lg:text-5xl">
              sobre
            </h1>
            <p className="text-2xl mt-4 lg:text-3xl text-muted-foreground">
              Gabriel Lima
            </p>
            <p className="text-sm lg:text-md">Software Engineer</p>
            <p className="text-md mt-6"></p>
          </div>
        </section>
      </div>
    </div>
  );
}
