import React from "react";
import useTitle from "../../hooks/useTitle";

const Blog = () => {
  useTitle("Blog");
  
  return (
    <div className="my-10 w-4/5 mx-auto">
      <h1 className="text-3xl font-bold text-center">Blog</h1>
      <div className="mt-4">
        <h2 className="text-xl font-bold">
          1. Difference between SQL and NoSQL
        </h2>
        <p className="font-bold mt-2">Features of SQL</p>
        <ul>
          <li className="list-disc"> Provide High-Performance Capabilities</li>
          <li className="list-disc">
            {" "}
            SQL is a powerful tool as it is highly compatible with all types of
            RDBMS like MySQL, SQL Server, Oracle Database, MS Access, etc.{" "}
          </li>
          <li className="list-disc">
            Data Consistency: SQL adheres to ACID properties with a strict
            schema that ensures better data consistency.{" "}
          </li>
          <li className="list-disc">Ensures Vertical Scalability</li>
          <li className="list-disc">
            Handle Large Transactions with efficiency
          </li>
          <li className="list-disc">
            Robust Security Measures like rigid schema, data consistency, data
            integrity, regular updates, etc.
          </li>
          <li className="list-disc">
            Suitable for every type of organization - large or small.{" "}
          </li>
          <li className="list-disc">SQL is easy to learn and manage</li>
          <li className="list-disc">Open Source Programming Language</li>
          <li className="list-disc">
            Supports Data Definition Language and Data Manipulation Language to
            query the databases
          </li>
        </ul>
        <p className="font-bold mt-2">Features of NoSQL</p>
        <ul>
          <li className="list-disc">
            NoSQL has higher scalability than other database management systems
          </li>
          <li className="list-disc">
            Schema Free: You do not need to define the schema of the database
            before storing the data onto the system.{" "}
          </li>
          <li className="list-disc">
            NoSQL allows the distribution of data on more than just one device.{" "}
          </li>
          <li className="list-disc">
            With NoSQL Database, you do not require specialized or complex
            hardware or storage solutions.
          </li>
          <li className="list-disc">Does not require data normalization</li>
          <li className="list-disc">Simple API for easy user interfaces</li>
          <li className="list-disc">
            Simple API for easy user interfacesCan store unstructured,
            semi-structured, or structured data.{" "}
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold">
          2. What is JWT, and how does it work?
        </h2>
        <p className=" mt-2">
          JWT, or JSON Web Token, is an open standard used to share security
          information between two parties — a client and a server. Each JWT
          contains encoded JSON objects, including a set of claims. JWTs are
          signed using a cryptographic algorithm to ensure that the claims
          cannot be altered after the token is issued.
        </p>
        <div className="">
          JWTs differ from other web tokens in that they contain a set of
          claims. Claims are used to transmit information between two parties.
          What these claims are depends on the use case at hand. For example, a
          claim may assert who issued the token, how long it is valid for, or
          what permissions the client has been granted. A JWT is a string made
          up of three parts, separated by dots (.), and serialized using base64.
          In the most common serialization format, compact serialization, the
          JWT looks something like this: xxxxx.yyyyy.zzzzz. <br /> Once decoded,
          you will get two JSON strings: <br />
          <ul>
            <li className="list-disc"> The header and the payload.</li>
            <li className="list-disc">The signature.</li>
          </ul>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold">
          3. What is the difference between javascript and NodeJS?
        </h2>
        <p className=" mt-2">
          JavaScript is a proper high-level programming language used to create
          web scripts whereas <br /> Node.js is a run time environment built on
          google’s v8 engine. <br /> <br />
          JavaScript is executed in the browser whereas using Node.js gives us
          the ability to execute JavaScript outside the browser. <br /> <br />
          JavaScript can manipulate DOM or add HTML within whereas Node.js
          doesn’t have the capability to add HTML. <br /> <br />
          JavaScript is mainly used to create front end web applications or
          develop client-side whereas Node.js is used on the back end
          development that is server-side development <br /> <br />
          JavaScript follows the standard of JavaScript when writing programs
          whereas Node.js is written in C++ while using the v8 engine, it runs
          JavaScript outside the browser. <br /> <br />
          JavaScript requires any running environment as it can execute on any
          engine such as Firefox’s spider monkey, v8 engine of google chrome,
          JavaScript core of Safari whereas Node.js runs only on the v8 engine
          of google chrome.
        </p>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold">
          4. How does NodeJS handle multiple requests at the same time?
        </h2>
        <p className=" mt-2">
          NodeJS receives multiple client requests and places them into
          EventQueue. NodeJS is built with the concept of event-driven
          architecture. NodeJS has its own EventLoop which is an infinite loop
          that receives requests and processes them. EventLoop is the listener
          for the EventQueue. <br /> <br />
          If NodeJS can process the request without I/O blocking then the event
          loop would itself process the request and sends the response back to
          the client by itself. But, it is possible to process multiple requests
          parallelly using the NodeJS cluster module or worker_threads module.
        </p>
      </div>
    </div>
  );
};

export default Blog;
