import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <MaxWidthWrapper className="mt-16 flex flex-col items-center text-center">
        <div className="mx-auto mb-6 flex items-center justify-center space-x-3 rounded-full border border-gray-300 bg-white px-6 py-2 shadow-lg hover:shadow-xl transition-all">
          <p className="text-sm font-semibold text-gray-700">Try Convo for Free</p>
        </div>

        <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
          <span className="text-blue-600">Speech</span> Focused Language Learning
        </h1>

        <p className="mt-6 max-w-prose text-lg text-zinc-700 sm:text-xl">
          Convo helps you improve your spoken fluency with the help of an AI tutor.
        </p>

        <Link
          className={cn(
            buttonVariants({
              size: "lg",
              className: "mt-6",
            }),
            "text-lg"
          )}
          href={"/dashboard"}
        >
          Start Speaking Now
        </Link>
      </MaxWidthWrapper>

      {/* Value Proposition Section */}
      <section className="relative mt-20">
        <div className="absolute inset-0 -z-10 overflow-hidden blur-xl">
          <div
            style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%)",
            }}
            className="absolute top-0 left-1/2 w-[60rem] -translate-x-1/2 bg-gradient-to-tr from-blue-500 to-cyan-300 opacity-50"
          ></div>
        </div>

        <div className="mx-auto max-w-6xl px-6">
          <div className="relative mt-12">
            <Image
              src="/dashboard-preview.png"
              alt="Product Preview"
              width={955}
              height={808}
              quality={100}
              className="mx-auto rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <MaxWidthWrapper>
        <section className="mt-24 sm:mt-36">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Start your first session in seconds
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Improving your spoken fluency has never been easier than with Convo.
            </p>
          </div>

          <ol className="mt-8 space-y-8 sm:space-y-0 sm:flex sm:space-x-12">
            <li className="sm:flex-1">
              <div className="flex flex-col space-y-3 border-l-4 border-blue-500 pl-4">
                <span className="text-sm font-medium text-blue-600">Step 1</span>
                <h3 className="text-xl font-semibold">Sign up for a Free Account</h3>
              </div>
            </li>
            <li className="sm:flex-1">
              <div className="flex flex-col space-y-3 border-l-4 border-blue-500 pl-4">
                <span className="text-sm font-medium text-blue-600">Step 2</span>
                <h3 className="text-xl font-semibold">
                  Choose a <span className="text-blue-600">Language</span> & <span className="text-blue-600">Scenario</span>
                </h3>
              </div>
            </li>
            <li className="sm:flex-1">
              <div className="flex flex-col space-y-3 border-l-4 border-blue-500 pl-4">
                <span className="text-sm font-medium text-blue-600">Step 3</span>
                <h3 className="text-xl font-semibold">Start Your Speaking Session</h3>
              </div>
            </li>
          </ol>
        </section>

        {/* Scenarios Section */}
        <section className="mt-24 sm:mt-36">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">
              Practice in Real Life Scenarios
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Get help if you make a mistake and guidance on saying something in your target language.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              {
                title: "At the Cafe",
                description: "Learn how to order drinks and snacks",
                image: "/coffee.webp",
              },
              {
                title: "Getting A Taxi",
                description: "Learn how to navigate and get directions",
                image: "/taxi.webp",
              },
              {
                title: "Social Activities",
                description: "Learn how to make plans and catch up with friends",
                image: "/schedule.webp",
              },
            ].map((scenario, index) => (
              <Card key={index} className="flex flex-col items-center gap-3 p-6 shadow-md hover:shadow-lg">
                <CardTitle>{scenario.title}</CardTitle>
                <CardDescription className="text-center text-gray-600">
                  {scenario.description}
                </CardDescription>
                <Image
                  src={scenario.image}
                  alt={scenario.title}
                  width={128}
                  height={128}
                  quality={100}
                  className="rounded-lg"
                />
              </Card>
            ))}
          </div>
        </section>

        {/* Powered By Section */}
        <section className="mt-24 sm:mt-36">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">Powered by</h2>
            <p className="mt-4 text-lg text-gray-600">
              These are the technologies behind the scene that make Convo possible
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {[
              {
                title: "Whisper AI",
                description: "Speech to text",
                image: "/mic.webp",
              },
              {
                title: "GPT 4",
                description: "Comprehensive prompts and responses",
                image: "/openai.webp",
              },
              {
                title: "WebSpeech",
                description: "Text to speech",
                image: "/speaker.webp",
              },
            ].map((tech, index) => (
              <Card key={index} className="flex flex-col items-center gap-3 p-6 shadow-md hover:shadow-lg">
                <CardTitle>{tech.title}</CardTitle>
                <CardDescription className="text-center text-gray-600">
                  {tech.description}
                </CardDescription>
                <Image
                  src={tech.image}
                  alt={tech.title}
                  width={128}
                  height={128}
                  quality={100}
                  className="rounded-lg"
                />
              </Card>
            ))}
          </div>
        </section>

        {/* Feedback Section */}
        <section className="mt-24 sm:mt-36">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">Feedback</h2>
            <p className="mt-4 text-lg text-gray-600">
              What are people saying about Convo
            </p>
          </div>

          <div className="mt-12">
            <Image
              width={1200}
              height={600}
              src="/tweet_collage.png"
              alt="Feedback"
              className="mx-auto rounded-xl shadow-2xl"
            />
          </div>
        </section>
      </MaxWidthWrapper>

      <Footer />
    </>
  );
}
