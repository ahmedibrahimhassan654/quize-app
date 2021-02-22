MCQ App

We want to have an application that allows students to enroll MCQ exams

with tracing their scores.

Requirements:

● In the first touch with the app it will prompt the student to provide his name.

● After Providing his name and submit, he will enroll the exam to see the first
question.

● Each question will be rendered separately.

● For each question there are 4 choices. The correct one is randomly

ordered among them.

● Use mongodb and node.js for the backend. The questions bank should

have at least 10 questions but it will randomly select 5 of them for each

exam enrollment.

● The questions are being rendered in a random order. i.e. each time you will

enroll in the exam you will have them (The questions) in a random order.

● The choices of every question are rendered in a random order as well. If

the same question had been selected for two exams, the choices will be

shuffled and ordered in a random way.

● Do not store any generic data in a component state. All global data must

be stored in a Redux store.

● Once the student finishes the exam he enrolled (which is only five

questions) he will be notified with the score he got through the next

rendered component.

● NOTE: Do not have any complex scenarios that’s not mentioned here. No

login. No Signup. No scenarios which are not mentioned here.

● Optional: Use Ant.design or react bootstrap for UI components or

whatever you see.

Prepared by

our fullstack team ;
