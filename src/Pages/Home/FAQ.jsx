import React from "react";

const FAQ = () => {
  return (
    <section className="">
      <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
        <h2 className="text-2xl font-semibold sm:text-4xl mb-10 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              Are there any practice tests included in the IELTS prep course
              materials?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
              There are 15 full IELTS tests included for you to practice in both
              the 90-day SPEED membership access to the course, as well as the
              180-day MASTER membership access to the course materials. Yes,
              that’s fifteen opportunities to practice as if you are taking a
              real IELTS test!{" "}
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              What do I need for the IELTS Speaking test?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
              You must bring the same identification documents you supplied on
              your IELTS Application Form and used for the rest of the test.
              Your ID will be checked before you enter the interview room.
              Personal items, including electronic devices and watches, are not
              allowed in the Speaking test room.{" "}
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              What are the two types of IELTS test?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
              There are two types of the IELTS test: IELTS Academic and IELTS
              General Training. <br />
              <br />
              The IELTS Academic test is for people applying for higher
              education or professional registration in an English-speaking
              environment. It reflects some of the features of academic language
              and assesses whether you are ready to begin studying or training.{" "}
              <br /> <br />
              The IELTS General Training test is for those who are going to
              English speaking countries for secondary education, work
              experience or training programs. It is also a requirement for
              migration to Australia, Canada, New Zealand and the UK. The test
              focuses on basic survival skills in broad social and workplace
              contexts. Listening and Speaking are the same for both tests, but
              the subject matter of the Reading and Writing sections differs
              depending on which test you take.{" "}
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              What is the IELTS Speaking test?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
              The Speaking test is a conversation with a certified IELTS
              Examiner. The Speaking test is made up of three parts. It is
              recorded on an audio cassette or a digital recorder.{" "}
            </p>
          </details>
          <details className="w-full border rounded-lg">
            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">
              What types of materials are included in the IELTS preparation
              course material?
            </summary>
            <p className="px-4 py-6 pt-0 ml-4 -mt-4 ">
              In the course material you get access to through one of the
              membership types, different types of course material are included.
              We have audio materials and eBooks you can download for you to
              keep. On top of that, there also over 400 training videos you can
              use. And of course there are opportunities to test your knowledge
              and skill. In total there are 10 units that take you through all
              aspects of IELTS and get you fully prepared.{" "}
            </p>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
