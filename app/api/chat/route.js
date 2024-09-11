import { OpenAIClient, AzureKeyCredential } from '@azure/openai';
import { NextResponse } from 'next/server';

const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
const apiKey = process.env.AZURE_OPENAI_API_KEY;
const model = process.env.AZURE_OPENAI_MODEL;

export async function POST(req){
	
	const { messages } = await req.json();

	const client = new OpenAIClient(endpoint, new AzureKeyCredential(apiKey));

	messages.unshift({
		role: 'system',
		content: `You are PortfolioGPT, answering only questions based on the resume provided.
Resume:
${DATA_RESUME}

Help users learn more about Adrian from his resume.`
	})

	const response = await client.getChatCompletions(model, messages, {
		maxTokens: 128,
	})

	return NextResponse.json({ 
		message: response.choices[0].message.content
	 })
}



const DATA_RESUME = `Buddy Humphries
Address: 6273 Mantalcino Drive Round Rock Tx
Phone: +512-887-3848
Email: jhumphriesent@gmail.com
Education
Bachelors of Science
Software Engineering
Western Governors University
Software Engineering Immersive  [Grad 2022]
General Assembly
High School Course [2014 – 2016]
Game Design Fundamentals
Elgin High School
Skills and Competences
Full Stack Website Developer 
Front End:  HTML, CSS, JavaScript, SASS, SCSS, LESS, SEO React, Angular, Knockout, jQuery Bootstrap, REST, GraphQL, AJAX/API,
Back End:  NodeJS, PHP MySQL, MongoDB, SQL, noSQL, Express,
Platforms: Amazon AWS, Linux, Windows, Cloud, Automation, Custom 
Frameworks: WordPress, Joomla, PrestaShop, Shopify, Stripe, PayPal, Github 
Management: Google Analytics, Adwords, Facebook Ads, Web Masters, etc 
Full Stack App Developer 
Platforms:  iOS Development, Android Development, OS Development 
Front End:  React Native, JavaScript 
Back End:  Integrated platforms, IE, Custom, WordPress, Drupal, etc 
UX and UI Designer 
Platforms:  Adobe Photoshop, Sketch, Figma 
UI:  Website Mock-ups, App Mock-ups, Infographics, Stylesheets, Logos 
UX:  Wireframing, Workflow Diagrams, Technical Specifications  
Employment History
Web Developer [Apr 2022 – Jul 2023] 
Facebook
 Did some software testing and IT.
 Provide over the phone support for clients to address software, hardware and network issues and assist clients through using remote software.
 Troubleshooting and resolving level 2 and 3 technical problems.
 Assist with large scale application deployment. 

Additional Skills and Interests
Language: Fluent in English, some Spanish
Hobbies: Video Games, Graphics Design, Cardio`