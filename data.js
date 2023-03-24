export const questions = [
  {
    id: '1',
    question: 'What do you want to learn or do more of at work?',
    excerpt:
      'To meet new people and learn new technical skills...',
    answer:
    'What I want to learn or do more of at work is to continue expanding my knowledge and skill set in different areas of technology. I am passionate about learning new technologies and frameworks, as they present exciting opportunities for me to solve complex problems and puzzles. I find the process of discovering and mastering new technologies to be exhilarating, and I take great pride in being able to bring that knowledge to bear on real-world projects. One of the things that I love most about software engineering is being able to help people. There is something incredibly rewarding about using my technical skills to solve problems and make a difference in peoples lives. Whether its helping a small business optimize their website or providing support to a large enterprise, I find it deeply satisfying to work with people and help them achieve their goals. Continuously learning and improving my skills not only benefits my clients but also helps me stay challenged and motivated in my work. Overall, I am excited about the prospect of continuing to learn and grow in my role and being able to provide valuable solutions to clients while expanding my knowledge and skill set',
  },
  {
    id: '2',
    question: 'Describe how you solved a challenge that one of your previous support teams faced. How did you determine your solution was successful?',
    excerpt: 'Environmental, configuration or ...',
    answer:
      'Our support team faced a challenge where a customer reported an issue with accessing a specific resource in the environment. After some investigation, the team found that the issue was caused by incorrect security group permissions. However, it was challenging to reproduce the issue, as it was only affecting a small subset of users. To solve this challenge, the team updated the security group permissions to grant the necessary access to the affected users. To determine the success of the solution, the team monitored the resource access for the affected users and confirmed that they were able to access the resource without any issues. Additionally, they checked with the customer to ensure that the solution resolved their initial complaint. If the affected users were able to access the resource and the customer confirmed that the issue was resolved, then the team considered the solution to be successful. I monitored the application closely to ensure that the fix did not cause any unintended consequences. I also communicated with the support team to confirm that there were no further complaints related to the issue.',
  },
  {
    id: '3',
    question: 'How would you compare Next.js with another framework? Feel free to compare with a framework of your choice?',
    excerpt:
      'Lets compare Next.js to Nuxt.js ...',
    answer:
      'I would like to compare Next.js to Nuxt.js framework based on my experience and knowledge. Next.js and Nuxt.js are both server-side rendering frameworks that are based on front-end libraries - Next.js on React and Nuxt.js on Vue.js. Both allow faster initial load times and better SEO performance compared to client-side rendering. They also have automatic code splitting, static site generation, and middleware support. One of the difference between Next.js and Nuxt.js is configuration. Next.js has such minimal approach and requires less configuration, and that makes it so easy to use. On the other hand, Nuxt.js provides more configuration options and I believe that can overwhelming. Next.js has a well-documented and easy-to-use API for devs to build React applications. Next and Nuxt have their own active dev communities. In terms of performance, I would say Next.js has an edge over Nuxt.js in terms of speed and optimization. Next.js also provides better support for hybrid rendering, which allows for the combination of server-side and client-side rendering.',
  },
  {
    id: '4',
    question: 'When would you choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel?',
    excerpt:
      'Edge functions? Serverless functions or...',
    answer:
      'Edge Functions are particularly useful in scenarios where lightweight and simple serverless functions need to be executed quickly at the edge of the network. I would use edge functions for user authentication based on some specific criteria, A/B testing, to modify HTTP headers. Serverless functions are useful with complex server-side operations. I would use serverless functions to create custom API endpoints, to respond to webhooks from external services, to perform scheduled jobs. Edge middleware is basically some operations that needs to be done before request is completed, so I would use edge middleware I need to modify the response, redirect the request or modify headers. ',
  },
  {
    id: '5',
    question: 'Hi there, I keep getting a build error from Vercel saying that “/vercel/path0/dist/routes-manifest.json” couldn’t be found. Can you help me debug this?? I’m so frustrated. I’ve been trying to make this work for hours and I just can’t figure it out. Your docs aren’t helpful.',
    excerpt:
      'Imagine a customer writes in, requesting help with the following question. Write a first response for triaging this case and helping them solve the issue...',
    answer:
      'Hello there, We are sorry to hear that you are experiencing this build error with Vercel. Let me see if we can get this issue resolved for you. The error you are seeing usually means that the build process can not find a file that is needed for your application to run or caused by a misconfiguration in your project. In order to troubleshoot this, can you please send me with the following information: Please send full Vercel log and environment information of your machine. What framework or platform are you using to build your application? Please provide their versions as well.  What are recent changes you have made to your code or configuration? Can you please share the Vercel project name or URL? What other errors, warning or logs that you are seeing in the Vercel dashboard or in your terminal? In the meantime, can you please try clearing you cache and then rebuilding your project to see if that resolves the issue. Please let me know if this helps or if you have any questions or concerns.',
  },
  {
    id: '6',
    question: 'What do you think is one of the most common problems which customers ask Vercel for help with? How would you help customers to overcome common problems, short-term and long-term?',
    excerpt:
      'Most common problems ...',
    answer:
      'I believe that one of the most common problems that customers ask Vercel for help with is related to deployment and configuration issues. To help customers overcome these issues in the short-term, Vercel"s support team may provide guidance on how to troubleshoot and resolve issues related to incorrect environment variables, configuration files, or build processes. This may include reviewing the customer"s code or configuration settings and suggesting changes to fix the issue.For performance and scaling issues, Vercel support may suggest short-term solutions such as caching, optimizing code or suggesting scaling solutions to handle increased traffic. To address common problems in the long-term, Vercel may provide customers with resources such as tutorials, documentation, and best practices to help them optimize their applications and avoid common issues. Additionally, Vercel may suggest code review, performance analysis and optimization services to help customers improve their applications over time.',
  },
  {
    id: '7',
    question: 'How could we improve or alter this familiarization exercise',
    excerpt:
      'Maybe we can ...',
    answer:
      'Maybe we can add some additional context or complexity to the customer"s request, such as including more specific error messages or providing a more complex codebase. We could also provide additional resources or documentation to help the customer diagnose and resolve their issue, such as links to relevant Vercel documentation or code examples. Additionally, we could create variations of the exercise that focus on different aspects of customer support, such as troubleshooting performance issues, optimizing application code, or assisting with configuration and deployment. This would help to sort of simulate different types of real-world scenarios that customer success engineers may encounter in their work.',
  }
]
