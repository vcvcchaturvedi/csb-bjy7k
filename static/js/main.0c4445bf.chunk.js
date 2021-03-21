(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{17:function(e,t,i){},35:function(e,t,i){"use strict";i.r(t);var s=i(0),n=i(18),r=i.n(n),c=i(5),a=(i(17),i(1)),l=function(e){var t=Object(s.useState)(!1),i=Object(c.a)(t,2),n=i[0],r=i[1];return Object(a.jsxs)("div",{children:[e.step,Object(a.jsx)("br",{}),Object(a.jsxs)("button",{disabled:n,className:"Btn",onClick:function(){e.done<e.stepLength&&e.setDone(e.done+1),r(!0)},children:[Object(a.jsx)("span",{children:"\u2705"}),"Done"]})]})},o=function(e){var t=Object(s.useState)(1),i=Object(c.a)(t,2),n=i[0],r=i[1];return console.log(n),e.steps.map((function(e,t,i){var s=t+1;return s>n?"":Object(a.jsxs)("div",{className:"FloatLeft",children:[Object(a.jsxs)("h5",{children:["STEP ",s]}),Object(a.jsx)(l,{step:e,done:n,setDone:r,stepLength:i.length})]})}))},d=function(e){return e.ingredients.map((function(e){return Object(a.jsxs)("div",{children:[Object(a.jsx)("i",{children:e}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{})]})}))},h=function(e){var t=e.prop,i=Object(s.useState)(!1),n=Object(c.a)(i,2),r=n[0],l=n[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:"OuterDiv",children:Object(a.jsx)("img",{src:t.imag,alt:"Dish",className:"Dishimage"})}),Object(a.jsx)("h1",{children:t.title}),Object(a.jsxs)("h3",{children:["\ud83d\udd51 ",t.time," Minutes\xa0\ud83c\udf55 Serves ",t.serves," \xa0\ud83c\udfa9"," ",t.difficulty," "]}),Object(a.jsx)("h5",{children:t.subtitle}),Object(a.jsx)("button",{className:"Btn",onClick:function(){l(!r)},children:"Toggle Recipe"}),r?Object(a.jsxs)("div",{className:"InnerDiv",children:[Object(a.jsxs)("div",{className:"Left",children:[Object(a.jsx)("h4",{children:"Ingredients"}),Object(a.jsx)("br",{}),Object(a.jsx)(d,{ingredients:t.ingredients})]}),Object(a.jsx)("div",{className:"Right",children:Object(a.jsx)(o,{steps:t.steps})})]}):"",Object(a.jsx)("hr",{})]})},j=function(e){return e.recipes.map((function(e,t){return Object(a.jsx)(h,{prop:e})}))},u=function(){var e=Object(s.useContext)(v),t=Object(c.a)(e,2),i=t[0];t[1];return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(j,{recipes:i})})},p=i(14),b=i(3),O=i(2),f=i(23),m=function(e){var t=e.register,i=e.index,s="Enter the recipe's step "+i,n="steps"+i;return Object(a.jsx)("input",{name:n,type:"text",placeholder:s,ref:t({validate:function(e){return""!==e}})})},x=function(e){var t=e.register,i=e.index,s="Enter the recipe's Ingredient number "+i,n="ingredients"+i;return Object(a.jsx)("input",{name:n,type:"text",required:!0,placeholder:s,ref:t({validate:function(e){return""!==e}})})},g=function(){var e=Object(b.f)(),t=Object(s.useContext)(v),i=Object(c.a)(t,2),n=i[0],r=i[1];Object(s.useEffect)((function(){localStorage.setItem("recipes",JSON.stringify(Object(O.a)(n)))}),[n]);var l=Object(f.a)(),o=l.register,d=l.handleSubmit,h=l.errors,j="",u="",p=Object(s.useState)(1),g=Object(c.a)(p,2),y=g[0],k=g[1],w=Object(s.useState)(1),S=Object(c.a)(w,2),N=S[0],R=S[1];return Object(a.jsx)("div",{className:"formRecipe",children:Object(a.jsxs)("form",{onSubmit:d((function(t){var i={};for(var s in i.imag=t.imag,i.title=t.title,i.time=t.time,i.serves=t.serves,i.difficulty=t.difficulty,i.subtitle=t.subtitle,i.ingredients=[],t)s.startsWith("ingredients")&&i.ingredients.push(t[s]);for(var c in i.steps=[],t)c.startsWith("steps")&&i.steps.push(t[c]);r([].concat(Object(O.a)(n),[i])),e.push("/")})),children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"imag",children:"Image"}),Object(a.jsx)("input",{defaultValue:j,name:"imag",type:"text",placeholder:"Image URL",ref:o({validate:function(e){return""!==e}})})]}),h.imag&&Object(a.jsx)("p",{children:"\u26a0 Please enter URL of the image"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"title",children:"Title"}),Object(a.jsx)("input",{defaultValue:u,name:"title",type:"text",placeholder:"Enter the recipe's title",ref:o({validate:function(e){return""!==e}})})]}),h.title&&Object(a.jsx)("p",{children:"\u26a0 Please enter the Recipe's title"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"time",children:"Time"}),Object(a.jsx)("input",{name:"time",type:"text",placeholder:"Cooking time",ref:o({validate:function(e){return parseFloat(e)>0}})})]}),h.time&&Object(a.jsx)("p",{children:"\u26a0 Please enter time taken in minutes"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"serves",children:"Serves"}),Object(a.jsx)("input",{name:"serves",placeholder:"Serves how many?",type:"text",ref:o({validate:function(e){return parseFloat(e)>0}})})]}),h.serves&&Object(a.jsx)("p",{children:"\u26a0 Please enter the Recipe's serving quantity"}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"difficulty",children:"Difficulty"}),Object(a.jsxs)("select",{name:"difficulty",placeholder:"Enter prepartion difficulty",ref:o,children:[Object(a.jsx)("option",{value:"Easy",children:"Easy"}),Object(a.jsx)("option",{value:"Medium",children:"Medium"}),Object(a.jsx)("option",{value:"Hard",children:"Hard"})]})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"subtitle",children:"Sub-Title"}),Object(a.jsx)("input",{name:"subtitle",type:"text",placeholder:"Enter the recipe's sub-title",ref:o({validate:function(e){return""!==e}})})]}),h.subtitle&&Object(a.jsx)("p",{children:"\u26a0 Please enter the Recipe's subtitle"}),Object(a.jsx)("label",{children:"Ingredients"}),Object(a.jsxs)("div",{children:[Object(O.a)(Array(y)).map((function(e,t){return Object(a.jsx)(x,{register:o,index:t+1})})),Object(a.jsx)("button",{className:"Btn",onClick:function(){k(y+1)},children:"Add Ingredient"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("label",{htmlFor:"steps",children:"Steps"}),Object(a.jsxs)("div",{children:[Object(O.a)(Array(N)).map((function(e,t){return Object(a.jsx)(m,{register:o,index:t+1})})),Object(a.jsx)("button",{className:"Btn",onClick:function(){R(N+1)},children:"Add Step"})]})]}),h.steps&&Object(a.jsx)("p",{children:"\u26a0 Please enter the Recipe's steps"}),Object(a.jsx)("input",{type:"submit"})]})})},v=Object(s.createContext)();function y(){var e,t=JSON.parse(localStorage.getItem("recipes"));e=t||[{imag:"https://images.immediate.co.uk/production/volatile/sites/2/2020/08/OLI-0720_Healthy-ThaiBrocolliFriedRice_04523_preview-b19843c.jpg?webp=true&quality=90&resize=940%2C399",title:"Thai-style broccoli fried rice",time:"25",serves:"2",difficulty:"Easy",subtitle:"Packed with protein and low in calories, this speedy broccoli rice dish is full of exciting texture and flavour, with punchy chilli, zingy lime, crunchy veg and peanuts",ingredients:["broccoli a large head, stalk chopped and cut into florets","shallots 2 long, chopped","garlic 3 cloves, chopped","ginger a thumb-sized piece, chopped","lemongrass 1 stick, thinly sliced","toasted sesame oil 2 tsp","red chilli 1, finely sliced","red pepper 1, finely sliced","carrot 1, peeled into ribbons","mangetout a handful, halved soy sauce 2 tbsp","tamarind paste 2 tbsp","caster sugar 1 tsp","lime 1, quartered to serve","eggs 2, fried (we used Clarence Court Burford Browns)","roasted peanuts a handful, chopped"],steps:["Put the chopped broccoli stalk into a food processor and pulse until it is finely chopped like grains of rice. Tip out into a bowl and then repeat with the broccoli florets.","Put the shallots, garlic, ginger and lemongrass in the food processor and pulse until finely chopped.","Heat the sesame oil in a non-stick frying pan and fry the shallot mixture until lightly golden. Tip in the broccoli rice with 2 tbsp of water, \xbe of the chilli and all of the pepper, and fry for 5 minutes until the broccoli is cooked through and beginning to caramelise. Add in the carrot and mangetout.","Mix together the soy, tamarind, sugar and the juice of two of the lime quarters, then tip this into the pan with a little seasoning. Cook for 5 minutes until the sauce is coating everything. Divide between two plates and top with the fried eggs, chopped peanuts, remaining chilli and the extra lime wedges for squeezing over."]},{imag:"https://images.immediate.co.uk/production/volatile/sites/2/2020/06/Steven-Joyce-JOS2020026D00001-FS_preview-7ab8c0e.jpg?webp=true&quality=90&resize=940%2C399",title:"Veggie fajitas",time:"30",serves:"2",difficulty:"Easy",subtitle:"Make it a fajita night with this speedy veggie dinner, perfect for the whole family to enjoy. Use a little mild chilli powder to give these wraps a kick, and hot-smoked paprika for colour",ingredients:["oil for frying","onion 1, halved and sliced","red pepper 1, sliced","ground cumin \xbd tsp","hot-smoked paprika \xbc tsp","mild chilli powder \xbd tsp","black beans 400g tin, rinsed and drained","flour tortillas 4, warmed","mature cheddar 50g, grated","soured cream 4 tbsp","hot sauce to serve"],steps:["Toss all the salsa ingredients together with a good pinch of salt and leave to sit while you make the fajitas.","Heat 1 tbsp of oil in a large pan and cook the onion and pepper over a high heat until softened and starting to char at the edges. Turn down the heat and add the spices, tossing well. Add the beans with a splash of water and keep cooking until the beans are piping hot.","Serve the beans in warm tortillas with the salsa, cheese, soured cream and hot sauce, if you like."]}];var i=Object(s.useState)(e),n=Object(c.a)(i,2),r=n[0],l=n[1],o=[r,l],d=function(){return Object(a.jsx)(v.Provider,{value:o,children:Object(a.jsx)(g,{})})},h=function(){return Object(a.jsx)(v.Provider,{value:o,children:Object(a.jsx)(u,{recipes:r})})};return Object(a.jsx)(p.a,{children:Object(a.jsxs)("div",{children:[Object(a.jsx)("h1",{className:"Title",children:" My Recipe App "}),Object(a.jsxs)("ul",{className:"FlexBox",children:[Object(a.jsx)("li",{className:"NavLink1",children:Object(a.jsx)("button",{className:"LinkButton",children:Object(a.jsx)(p.b,{to:"/",className:"HideLink",children:"Show Recipes"})})}),Object(a.jsx)("li",{className:"NavLink2",children:Object(a.jsx)("button",{className:"LinkButton",children:Object(a.jsx)(p.b,{to:"/addRecipe",className:"HideLink",children:"Add a Recipe"})})})]}),Object(a.jsx)("hr",{}),Object(a.jsxs)(b.c,{children:[Object(a.jsx)(b.a,{path:"/addRecipe",children:Object(a.jsx)(d,{})}),Object(a.jsx)(b.a,{path:"/",children:Object(a.jsx)(h,{})})]})]})})}var k=document.getElementById("root");r.a.render(Object(a.jsx)(s.StrictMode,{children:Object(a.jsx)(y,{})}),k)}},[[35,1,2]]]);
//# sourceMappingURL=main.0c4445bf.chunk.js.map