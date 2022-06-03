"use strict";(self["webpackChunkvuejs_tailwindcss_portfolio"]=self["webpackChunkvuejs_tailwindcss_portfolio"]||[]).push([[176],{9826:function(t,e,r){var a=r(2109),l=r(2092).find,i=r(1223),s="find",o=!0;s in[]&&Array(1)[s]((function(){o=!1})),a({target:"Array",proto:!0,forced:o},{find:function(t){return l(this,t,arguments.length>1?arguments[1]:void 0)}}),i(s)},9600:function(t,e,r){var a=r(2109),l=r(1702),i=r(8361),s=r(5656),o=r(9341),n=l([].join),d=i!=Object,c=o("join",",");a({target:"Array",proto:!0,forced:d||!c},{join:function(t){return n(s(this),void 0===t?",":t)}})},1934:function(t,e,r){r.r(e),r.d(e,{default:function(){return B}});var a=r(6252),l={class:"container mx-auto flex flex-col-reverse md:flex-row py-5 md:py-10 md:mt-10"};function i(t,e,r,i,s,o){var n=(0,a.up)("ContactForm"),d=(0,a.up)("ContactDetails");return(0,a.wg)(),(0,a.iD)("div",l,[(0,a.Wm)(n),(0,a.Wm)(d,{contacts:t.contacts},null,8,["contacts"])])}r(4916),r(5306);var s=r(8508),o=r.n(s),n=(r(8309),r(9963)),d={class:"w-full md:w-1/2"},c={class:"leading-loose max-w-xl m-4 p-7 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"},m=(0,a._)("p",{class:"font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8"}," Contact Form ",-1),g=(0,a._)("label",{class:"block text-lg text-primary-dark dark:text-primary-light mb-2",for:"from_name"},"Full Name",-1),u=(0,a._)("label",{class:"block text-lg text-primary-dark dark:text-primary-light mb-2",for:"from_email"},"Email",-1),h=(0,a._)("div",null,[(0,a._)("label",{class:"block text-lg text-primary-dark dark:text-primary-light mb-2",for:"subject"},"Subject"),(0,a._)("input",{class:"w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md",id:"subject",name:"subject",type:"text",required:"",placeholder:"Subject","aria-label":"Subject"})],-1),p=(0,a._)("div",null,[(0,a._)("label",{class:"block text-lg text-primary-dark dark:text-primary-light mb-2",for:"message"},"Message"),(0,a._)("textarea",{class:"w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md",id:"message",name:"message",cols:"14",rows:"6","aria-label":"Message"})],-1);function x(t,e,r,l,i,s){var o=(0,a.up)("Button");return(0,a.wg)(),(0,a.iD)("div",d,[(0,a._)("div",c,[m,(0,a._)("form",{ref:"form",onSubmit:e[2]||(e[2]=(0,n.iM)((function(){return s.sendEmail&&s.sendEmail.apply(s,arguments)}),["prevent"])),class:"font-general-regular space-y-7"},[(0,a._)("div",null,[g,(0,a.wy)((0,a._)("input",{class:"w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md",id:"from_name",name:"from_name",type:"text",required:"","onUpdate:modelValue":e[0]||(e[0]=function(e){return t.form.name=e}),placeholder:"Your Name","aria-label":"Name"},null,512),[[n.nr,t.form.name]])]),(0,a._)("div",null,[u,(0,a.wy)((0,a._)("input",{class:"w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md",id:"from_email","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.form.email=e}),name:"from_email",type:"email",required:"",placeholder:"Your Email","aria-label":"Email"},null,512),[[n.nr,t.form.email]])]),h,p,(0,a._)("div",null,[(0,a.Wm)(o,{title:"Send Message",class:"px-4 py-2.5 text-white tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg duration-500",type:"submit","aria-label":"Send Message"})])],544)])])}var f=r(9135),v=r(9101),b=r(3002),y={components:{Button:f.Z},data:function(){return{form:{name:"",email:""}}},methods:{sendEmail:function(){var t=this,e=(0,b.pm)(),r=this.$loading.show({loader:"dots",color:"#6366f1"});v.ZP.sendForm("service_d0rbjon","template_3utf8xw",this.$refs.form,"d7ILlehyR7RPlXcUs").then((function(){r.hide(),t.$refs.form.reset(),e.success("Your query has been submitted successfully",{timeout:2e3})}),(function(){r.hide(),t.$refs.form.reset(),e.error("Something went wrong!",{timeout:2e3})}))}}},w=r(3744);const k=(0,w.Z)(y,[["render",x]]);var j=k,_=r(3577),P={class:"w-full md:w-1/2"},S={class:"text-left max-w-xl px-6"},D=(0,a._)("h2",{class:"font-general-medium text-2xl text-primary-dark dark:text-primary-light mt-12 mb-8"}," Contact details ",-1),C={class:"font-general-regular"},H=["data-feather"];function z(t,e,r,l,i,s){return(0,a.wg)(),(0,a.iD)("div",P,[(0,a._)("div",S,[D,(0,a._)("ul",C,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.contacts,(function(t){return(0,a.wg)(),(0,a.iD)("li",{class:"flex",key:t.id},[(0,a._)("i",{"data-feather":t.icon,class:"w-5 text-gray-500 dark:text-gray-400 mr-4"},null,8,H),(0,a._)("a",{href:"#",class:(0,_.C_)(["text-lg mb-4 text-ternary-dark dark:text-ternary-light","mail"===t.icon||"phone"===t.icon?"hover:underline cursor-pointer":""]),"aria-label":"Website and Phone"},(0,_.zw)(t.name),3)])})),128))])])])}var I={props:["contacts"]};const M=(0,w.Z)(I,[["render",z]]);var V=M,A={components:{ContactForm:j,ContactDetails:V},data:function(){return{contacts:[{id:1,name:"House 01, Road 08, Sector 09, Dhaka-1230, Bangladesh",icon:"map-pin"},{id:2,name:"abdullah001rti@gmail.com",icon:"mail"},{id:3,name:"+8801738868597",icon:"phone"}]}},mounted:function(){o().replace()},updated:function(){o().replace()},methods:{}};const L=(0,w.Z)(A,[["render",i]]);var B=L},7739:function(t,e,r){r.r(e),r.d(e,{default:function(){return H}});var a=r(6252),l={class:"container mx-auto"};function i(t,e,r,i,s,o){var n=(0,a.up)("ProjectsGrid");return(0,a.wg)(),(0,a.iD)("div",l,[(0,a.Wm)(n)])}var s=r(3577),o=r(9963),n={class:"pt-10 sm:pt-14"},d={class:"text-center"},c={class:"font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"},m={class:"mt-10 sm:mt-10"},g=(0,a._)("h3",{class:"font-general-regular text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl font-normal mb-4"}," Search projects by title or filter by category ",-1),u={class:"flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-2"},h={class:"flex justify-between gap-2"},p=(0,a._)("span",{class:"hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer"},[(0,a._)("i",{"data-feather":"search",class:"text-ternary-dark dark:text-ternary-light"})],-1),x={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10"};function f(t,e,r,l,i,f){var v=(0,a.up)("ProjectsFilter"),b=(0,a.up)("ProjectSingle");return(0,a.wg)(),(0,a.iD)("section",n,[(0,a._)("div",d,[(0,a._)("p",c,(0,s.zw)(t.projectsHeading),1)]),(0,a._)("div",m,[g,(0,a._)("div",u,[(0,a._)("div",h,[p,(0,a.wy)((0,a._)("input",{"onUpdate:modelValue":e[0]||(e[0]=function(e){return t.searchProject=e}),class:"font-general-medium pl-3 pr-1 sm:px-4 py-2 border-1 border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light",id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"},null,512),[[o.nr,t.searchProject]])]),(0,a.Wm)(v,{onFilter:e[1]||(e[1]=function(e){return t.selectedCategory=e})})])]),(0,a._)("div",x,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(f.filteredProjects,(function(t){return(0,a.wg)(),(0,a.j4)(b,{key:t.id,project:t},null,8,["project"])})),128))])])}r(7327),r(1539),r(7042),r(6699),r(2023),r(4603),r(8450),r(4916),r(8386),r(9714),r(4723),r(5306);var v=r(8508),b=r.n(v),y=r(9810),w=r(1632),k=r(4259),j={components:{ProjectSingle:w.Z,ProjectsFilter:y.Z},data:function(){return{projects:k.Z,projectsHeading:"Projects Portfolio",selectedCategory:"",searchProject:""}},computed:{filteredProjects:function(){return this.selectedCategory?this.filterProjectsByCategory():this.searchProject?this.filterProjectsBySearch():this.projects}},methods:{filterProjectsByCategory:function(){var t=this;return this.projects.filter((function(e){var r=e.category.charAt(0).toUpperCase()+e.category.slice(1);return console.log(r),r.includes(t.selectedCategory)}))},filterProjectsBySearch:function(){var t=new RegExp(this.searchProject,"i");return this.projects.filter((function(e){return e.title.match(t)}))}},mounted:function(){b().replace()}},_=r(3744);const P=(0,_.Z)(j,[["render",f]]);var S=P,D={name:"Projects",components:{ProjectsGrid:S}};const C=(0,_.Z)(D,[["render",i]]);var H=C},1142:function(t,e,r){r.r(e),r.d(e,{default:function(){return C}});var a=r(6252),l=r(3577),i=r(158),s={class:"container mx-auto"},o={class:"block sm:flex sm:gap-10 mt-00 sm:mt-20"},n={class:"gap-5 grid grid-col-1 grid-row-1 lg:grid-row-5 lg:grid-cols-4 grid-row-1"},d=(0,a.uE)('<div class="order-1"><div class="mb-5 shadow-md border rounded-md"><div class="flex flex-wrap justify-center mt-5"><div class="w-64 px-4"><img class="align-middle border-4 h-auto max-w-full p-1 rounded-full shadow-lg" src="'+i+'"></div></div><div class="px-5"><div class="items-center justify-center mt-2 text-center"><h1 class="text-2xl text-gray-800 dark:text-ternary-light font-bold"> Md. Abdullah </h1><div class="mlgtext-lg dark:text-gray-400 text-gray-600">Software Engineer</div></div><div class="mt-5 mb-2 text-gray-600 dark:text-gray-400 flex"><div class="mr-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div> abdullah001rti@gmail.com </div><div class="mb-2 text-gray-600 dark:text-gray-400 flex"><div class="mr-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg></div> +8801738868597 </div><div class="text-gray-600 dark:text-gray-400 flex"><div class="mr-2"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></div> Uttara, Dhaka, Bangladesh </div><div class="flex gap-2 justify-center"><a href="https://github.com/abd-abdullah" target="_blank" title="Github" class="my-5 text-blue-500 text-gray-600 flex"><div class="mr-2"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 dark:bg-ternary-light" viewBox="0 0 448 512"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"></path></svg></div></a><a href="https://www.linkedin.com/in/abd1rti" target="_blank" title="LinkedIn" class="my-5 text-blue-500 text-gray-600 flex"><div class="mr-2"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 dark:bg-ternary-light" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></div></a><a href="https://www.facebook.com/abd1rti" target="_blank" title="Facebook" class="my-5 text-blue-500 text-gray-600 flex"><div class="mr-2"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 dark:bg-ternary-light" viewBox="0 0 448 512"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path></svg></div></a></div></div></div></div>',1),c={class:"order-4"},m={class:"p-5 mb-5 shadow-md border rounded-md"},g={class:""},u=(0,a._)("h1",{class:"mb-4 text-2xl text-gray-700 dark:text-ternary-light font-bold"},"Projects",-1),h={class:"flex justify-center"},p=(0,a._)("button",null,"All Projects",-1),x={class:"order-3"},f={class:"mb-5 p-5 shadow-md border rounded-md"},v={class:""},b=(0,a._)("h1",{class:"mb-4 text-2xl text-gray-700 dark:text-ternary-light font-bold"},"Skills",-1),y={class:"mb-6 flex flex-wrap"},w=(0,a.uE)('<div class="order-6"><div class="mb-5 p-5 shadow-md border rounded-md"><div class="text-left"><h1 class="mb-4 text-2xl text-gray-700 dark:text-ternary-light font-bold">Links</h1><ul class=""><li class="pb-1"><div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg><a href="https://dev.publicsoftbd.com" class="text-blue-700" target="_blank">Website</a></div></li><li class="pb-1"><div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 dark:bg-gray-400" viewBox="0 0 448 512"><path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"></path></svg><a href="https://github.com/abd-abdullah" class="text-blue-700" target="_blank">GitHub</a></div></li><li class="pb-1"><div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 dark:bg-gray-400" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg><a href="https://www.linkedin.com/in/abd1rti" class="text-blue-700" target="_blank">LinkedIn</a></div></li><li class="pb-1"><div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 dark:bg-gray-400" viewBox="0 0 448 512"><path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"></path></svg><a href="https://www.linkedin.com/in/abd1rti" class="text-blue-700" target="_blank">Facebook</a></div></li><li class="pb-1"><div class="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1 dark:bg-gray-400" viewBox="0 0 512 512"><path d="M512 216.3c0-6.125-2.344-12.25-7.031-16.93L482.3 176.8c-4.688-4.686-10.84-7.028-16.1-7.028s-12.31 2.343-16.1 7.028l-5.625 5.625L329.6 69.28l5.625-5.625c4.687-4.688 7.03-10.84 7.03-16.1s-2.343-12.31-7.03-16.1l-22.62-22.62C307.9 2.344 301.8 0 295.7 0s-12.15 2.344-16.84 7.031L154.2 131.5C149.6 136.2 147.2 142.3 147.2 148.5s2.344 12.25 7.031 16.94l22.62 22.62c4.688 4.688 10.84 7.031 16.1 7.031c6.156 0 12.31-2.344 16.1-7.031l5.625-5.625l113.1 113.1l-5.625 5.621c-4.688 4.688-7.031 10.84-7.031 16.1s2.344 12.31 7.031 16.1l22.62 22.62c4.688 4.688 10.81 7.031 16.94 7.031s12.25-2.344 16.94-7.031l124.5-124.6C509.7 228.5 512 222.5 512 216.3zM227.8 238.1L169.4 297.4C163.1 291.1 154.9 288 146.7 288S130.4 291.1 124.1 297.4l-114.7 114.7c-6.25 6.248-9.375 14.43-9.375 22.62s3.125 16.37 9.375 22.62l45.25 45.25C60.87 508.9 69.06 512 77.25 512s16.37-3.125 22.62-9.375l114.7-114.7c6.25-6.25 9.376-14.44 9.376-22.62c0-8.185-3.125-16.37-9.374-22.62l58.43-58.43L227.8 238.1z"></path></svg><a href="https://www.beecrowd.com.br/judge/en/profile/53922" class="text-blue-700" target="_blank">URI Online Judge</a></div></li></ul></div></div></div><div class="order-5"><div class="mb-5 p-5 shadow-md border rounded-md"><div class="text-left"><h1 class="mb-4 text-2xl text-gray-700 dark:text-ternary-light font-bold">Soft Skills</h1><ul class="list-disc ml-4 dark:text-gray-400"><li>Patience</li><li>Fast Learner</li><li>Problem Solver</li><li>Time Management</li><li>Teamwork</li></ul></div></div></div><div class="order-2 shadow-md rounded-md lg:col-span-3 col-span-1 row-span-1 lg:row-span-5 border text-left p-8 w-full"><div class="mb-6"><h1 class="mb-4 text-2xl text-gray-700 dark:text-ternary-light font-bold">About me</h1><p class="text-gray-700 dark:text-gray-300 text-justify"> I am a full-stack web developer, and have been working in one of the BIG 2 companies for four years. I&#39;v four years of experienced in PHP Core, OOP, Codeigniter Framework, Laravel Framework. I have deep knowledge of different web technologies like Vue.js, jQuery, Ajax, HTML, CSS, Bootstrap, Tailwind css and MySql. During the last 4 years, I&#39;ve already contributed to over a twenty projects and assisted with managing more than seven project for the clients. All the projects with description are listed in this portfolio site. </p></div><div class="mb-10"><div><svg xmlns="http://www.w3.org/2000/svg" class="h-7 inline mb-3 w-7 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg><h1 class="mb-4 inline text-2xl text-gray-700 dark:text-ternary-light font-bold"> Experience</h1></div><div class="ml-3"><ul class="relative border-l border-gray-200"><li class="mb-6 ml-4"><div class="absolute w-3 h-3 bg-indigo-600 rounded-full -left-1.5 border border-white"></div><time class="mb-1 text-sm font-normal leading-none text-indigo-600 block">April 2020 - Present</time><h2 class="font-bold inline-flex mr-2 text-xl text-gray-800 dark:text-gray-300"> Software Engineer </h2><div class="mt-0"><div><div class="font-semibold text-base"><a href="https://systechdigital.com" class="text-blue-800" target="_blank"> Systech Digital Limited, </a> <span class="italic text-sm dark:text-gray-400">House-01, Road-16, Sector-07, Uttara, Dhaka</span></div></div><div class="ml-4 text-gray-700 dark:text-gray-300 mt-3"><ul class="list-disc"><li>Used Passport and sanctum to develop API for BIDA OSS microservice.</li><li>Develop and deploy CodeCanyon application</li><li>Speed up 60% to analyze the problem of the Membership application.</li><li>Enhanced E-commerce performance by optimizing the query</li><li>Integrate Bulk SMS in several project</li><li>Project resource planning and estimating timeline</li><li>Server maintains VPS Server, HostGator &amp; cPanel installation</li></ul></div></div></li><li class="mb-6 ml-4"><div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div><time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 block">April 2019 - April-2020</time><h2 class="font-bold inline-flex mr-2 text-xl text-gray-800 dark:text-gray-300"> Junior Software Engineer </h2><div class="mt-0"><div><div class="font-semibold text-base"><a href="https://systechdigital.com" class="text-blue-800" target="_blank"> Systech Digital Limited, </a> <span class="italic text-sm dark:text-gray-400">House-01, Road-16, Sector-07, Uttara, Dhaka</span></div></div><div class="ml-4 text-gray-700 dark:text-gray-400 mt-3"><ul class="list-disc"><li>Analysis software requirement specifications</li><li>Developed Membership application using CodeIgniter 3 and Laravel 7</li><li>Design &amp; Develop stakeholder applications</li><li>Perform tasks assigned by the project manager</li><li>Create technical documentation for reference and reporting</li></ul></div></div></li><li class="mb-6 ml-4"><div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div><time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 block">Dec 2018 - April 2019</time><h2 class="font-bold inline-flex mr-2 text-xl text-gray-800 dark:text-gray-300"> Full Stack Laravel Developer </h2><div class="mt-0"><div><div class="font-semibold text-base"><a href="https://softnio.com" class="text-blue-800" target="_blank"> Softnio, </a> <span class="italic text-sm dark:text-gray-400">House-165, Lane No 3, Mohakhali DOHS, Dhaka</span></div></div><div class="ml-4 text-gray-700 dark:text-gray-400 mt-3"><ul class="list-disc"><li>Analysis software requirement specifications</li><li>Develop ICO (Token Sale) application using Laravel 5.7</li><li>Developed CodeCanyon application</li></ul></div></div></li></ul></div></div><div class=""><div><svg xmlns="http://www.w3.org/2000/svg" class="h-7 inline mb-3 w-7 dark:text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg><h1 class="mb-4 inline text-2xl text-gray-700 dark:text-ternary-light font-bold"> Education Qualification</h1></div><div class="ml-3"><ul class="relative border-l border-gray-200"><li class="mb-6 ml-4"><div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div><time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 block">2015 - 2018</time><h2 class="font-bold inline-flex mr-2 text-xl text-gray-800 dark:text-gray-300"> Bachelor of Computer Science and Engineering </h2><div class="mt-0"><div><div class="font-semibold text-base text-gray-700 dark:text-gray-400"> IUBAT- International University of Business Agriculture and Technology </div></div><div class="text-gray-700 dark:text-gray-400"><ul class="list-disc ml-4 mt-2 text-gray-600 dark:text-gray-400 text-sm"><li><strong>Major courses:</strong> Software Engineering, Programming C, C++, JAVA, Programming Structure, Database Management System</li><li><strong>Passing Year:</strong> 2018</li><li><strong>CGPA:</strong> 3.87/4.00</li></ul></div></div></li><li class="mb-6 ml-4"><div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div><time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 block">2011 - 2013</time><h2 class="font-bold inline-flex mr-2 text-xl text-gray-800 dark:text-gray-300"> Higher Secondary School Certificate (HSC) </h2><div class="mt-0"><div><div class="font-semibold text-base text-gray-700 dark:text-gray-400"> Government Sundarban Adarsha College, Khulna </div></div><div class="text-gray-700 dark:text-gray-400"><ul class="list-disc ml-4 mt-2 text-gray-600 dark:text-gray-400 text-sm"><li><strong>Group/Subject:</strong> Science</li><li><strong>Passing Year:</strong> 2013</li><li><strong>GPA:</strong> 4.70/5.00</li></ul></div></div></li><li class="mb-6 ml-4"><div class="absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white"></div><time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 block">2010 - 2011</time><h2 class="font-bold inline-flex mr-2 text-xl text-gray-800 dark:text-gray-300"> Secondary School Certificate (SSC) </h2><div class="mt-0"><div><div class="font-semibold text-base text-gray-700 dark:text-gray-400"> Nakipur HC Pilot Model High School, Shyamnagar, Satkhira </div></div><div class="text-gray-700 dark:text-gray-400"><ul class="list-disc ml-4 mt-2 text-gray-600 dark:text-gray-400 text-sm"><li><strong>Group/Subject:</strong> Science</li><li><strong>Passing Year:</strong> 2011</li><li><strong>GPA:</strong> 4.69/5.00</li></ul></div></div></li></ul></div></div></div>',3);function k(t,e,r,i,k,j){var _=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",s,[(0,a._)("div",o,[(0,a._)("div",n,[d,(0,a._)("div",c,[(0,a._)("div",m,[(0,a._)("div",g,[u,(0,a._)("div",h,[(0,a.Wm)(_,{to:{name:"Projects"},class:"font-general-medium flex items-center px-4 py-2 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-md sm:text-md duration-300","aria-label":"All Projects"},{default:(0,a.w5)((function(){return[p]})),_:1})])])])]),(0,a._)("div",x,[(0,a._)("div",f,[(0,a._)("div",v,[b,(0,a._)("ul",null,[(0,a._)("li",y,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.skills,(function(t){return(0,a.wg)(),(0,a.iD)("span",{key:t,class:"mr-2 my-1 rounded-full border px-2 text-sm py-1 font-medium bg-gray-200"},(0,l.zw)(t),1)})),128))])])])])]),w])])])}r(4916),r(5306);var j=r(8508),_=r.n(j),P={data:function(){return{skills:["PHP","JavaScript","Laravel","jQuery","Ajax","Vue.js","MySql","Bootstrap","Tailwind","HTML5","CSS","SCSS","Git","cPanel"]}},metaInfo:function(){return{title:"Resume"}},mounted:function(){_().replace()},updated:function(){_().replace()},methods:{}},S=r(3744);const D=(0,S.Z)(P,[["render",k]]);var C=D},9808:function(t,e,r){r.r(e),r.d(e,{default:function(){return nt}});var a=r(6252),l={class:"container mx-auto mt-10 sm:mt-20"};function i(t,e,r,i,s,o){var n=(0,a.up)("ProjectHeader"),d=(0,a.up)("ProjectGallery"),c=(0,a.up)("ProjectInfo"),m=(0,a.up)("ProjectRelatedProjects");return(0,a.wg)(),(0,a.iD)("div",l,[(0,a.Wm)(n,{singleProjectHeader:t.singleProjectHeader},null,8,["singleProjectHeader"]),(0,a.Wm)(d,{projectImages:t.projectImages},null,8,["projectImages"]),(0,a.Wm)(c,{projectInfo:t.projectInfo},null,8,["projectInfo"]),(0,a.Wm)(m,{relatedProject:t.relatedProject},null,8,["relatedProject"])])}r(4916),r(5306),r(9826),r(1539),r(7042),r(7327),r(6699),r(2023);var s=r(8508),o=r.n(s),n=r(3577),d={class:"font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7"},c={class:"flex"},m={class:"flex items-center mr-10"},g=(0,a._)("i",{"data-feather":"clock",class:"w-4 h-4 text-ternary-dark dark:text-ternary-light"},null,-1),u={class:"font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"},h={class:"flex items-center"},p=(0,a._)("i",{"data-feather":"tag",class:"w-4 h-4 text-ternary-dark dark:text-ternary-light"},null,-1),x={class:"font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"};function f(t,e,r,l,i,s){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("p",d,(0,n.zw)(r.singleProjectHeader.singleProjectTitle),1),(0,a._)("div",c,[(0,a._)("div",m,[g,(0,a._)("span",u,(0,n.zw)(r.singleProjectHeader.singleProjectDate),1)]),(0,a._)("div",h,[p,(0,a._)("span",x,(0,n.zw)(r.singleProjectHeader.singleProjectCategory),1)])])])}var v={props:["singleProjectHeader"]},b=r(3744);const y=(0,b.Z)(v,[["render",f]]);var w=y,k={class:"grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12"},j=["href"],_=["src","alt"];function P(t,e,r,l,i,s){return(0,a.wg)(),(0,a.iD)("div",k,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.projectImages,(function(t){return(0,a.wg)(),(0,a.iD)("div",{class:"mb-10 sm:mb-0",key:t.id},[(0,a._)("a",{href:t.img,target:"_blank"},[(0,a._)("img",{src:t.img,class:"cursor-pointer h-64 object-cover rounded-xl hover:shadow-xl shadow-lg w-full",alt:t.title},null,8,_)],8,j)])})),128))])}var S={props:["projectImages"]};const D=(0,b.Z)(S,[["render",P]]);var C=D,H=(r(9600),{class:"block sm:flex gap-0 sm:gap-10 mt-14"}),z={class:"w-full sm:w-1/3 text-left"},I={class:"mb-8"},M={class:"font-general-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2"},V={class:"leading-loose"},A=["href","target"],L={class:"mb-8"},B={class:"font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"},E={class:"font-general-regular text-primary-dark dark:text-ternary-light"},Z=(0,a._)("p",{class:"font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"}," Share this ",-1),F={class:"flex items-center gap-3 mt-5"},G=["href"],R=["data-feather"],T={class:"w-full sm:w-2/3 text-left mt-10 sm:mt-0"},U={class:"font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7"};function Y(t,e,r,l,i,s){return(0,a.wg)(),(0,a.iD)("div",H,[(0,a._)("div",z,[(0,a._)("div",I,[(0,a._)("p",M,(0,n.zw)(r.projectInfo.clientHeading),1),(0,a._)("ul",V,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.projectInfo.companyInfos,(function(t){return(0,a.wg)(),(0,a.iD)("li",{key:t,class:(0,n.C_)(["font-general-regular","Demo Link"==t.title||"Link"==t.title?"text-indigo-600 font-bold dark:text-yellow-400":"text-ternary-dark dark:text-ternary-light"])},[(0,a._)("span",null,(0,n.zw)(t.title)+": ",1),(0,a._)("a",{href:"Demo Link"==t.title||"Link"==t.title?t.details:"#",target:("Demo Link"==t.title||"Link"==t.title)&&"_blank",class:(0,n.C_)(["Demo Link"==t.title||"Link"==t.title||"Phone"==t.title?"hover:underline cursor-pointer":""]),"aria-label":"Project Demo Link and Phone"},(0,n.zw)(t.details),11,A)],2)})),128))])]),(0,a._)("div",L,[(0,a._)("p",B,(0,n.zw)(r.projectInfo.technologies.title),1),(0,a._)("p",E,(0,n.zw)(r.projectInfo.technologies.techs.join(", ")),1)]),(0,a._)("div",null,[Z,(0,a._)("div",F,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.socialSharing,(function(t){return(0,a.wg)(),(0,a.iD)("a",{key:t.id,href:t.url,target:"__blank","aria-label":"Share Project",class:"bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"},[(0,a._)("i",{"data-feather":t.icon,class:"w-4 lg:w-5 h-4 lg:h-5"},null,8,R)],8,G)})),128))])])]),(0,a._)("div",T,[(0,a._)("p",U,(0,n.zw)(r.projectInfo.projectDetailsHeading),1),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.projectInfo.projectDetails,(function(t){return(0,a.wg)(),(0,a.iD)("p",{key:t.id,class:"font-general-regular mb-2 text-lg text-ternary-dark dark:text-ternary-light"},(0,n.zw)(t.details),1)})),128))])])}var W={props:["projectInfo"],data:function(){return{socialSharing:[{id:1,name:"Twitter",icon:"twitter",url:"https://twitter.com/intent/tweet/?text="+window.location.href},{id:2,name:"Instagram",icon:"instagram",url:"https://www.instagram.com/?url="+window.location.href},{id:3,name:"Facebook",icon:"facebook",url:"https://www.facebook.com/sharer/sharer.php?u="+window.location.href},{id:4,name:"LinkedIn",icon:"linkedin",url:"https://www.linkedin.com/sharing/share-offsite/?url="+window.location.href}]}},mounted:function(){o().replace()},updated:function(){o().replace()}};const q=(0,b.Z)(W,[["render",Y]]);var K=q,O={class:"mt-10 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark"},N={class:"font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left"},$={class:"grid grid-cols-1 sm:grid-cols-3 gap-10"},J=["src","alt"],Q={class:"text-center px-4 py-6"},X={class:"font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"},tt={class:"font-general-medium text-lg text-ternary-dark dark:text-ternary-light"};function et(t,e,r,l,i,s){var o=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("div",O,[(0,a._)("p",N,(0,n.zw)(r.relatedProject.relatedProjectsHeading),1),(0,a._)("div",$,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(r.relatedProject.relatedProjects,(function(t){return(0,a.wg)(),(0,a.iD)("div",{key:t.id,class:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark"},[(0,a.Wm)(o,{to:{name:"Single Project",params:{id:t.id}},"aria-label":"Related Project"},{default:(0,a.w5)((function(){return[(0,a._)("div",null,[(0,a._)("img",{src:t.projectImages[0].img,class:"rounded-xl",alt:t.title},null,8,J)]),(0,a._)("div",Q,[(0,a._)("p",X,(0,n.zw)(t.title),1),(0,a._)("span",tt,(0,n.zw)(t.category),1)])]})),_:2},1032,["to"])])})),128))])])}var rt={props:["relatedProject"]};const at=(0,b.Z)(rt,[["render",et]]);var lt=at,it=r(4259),st={name:"Projects",components:{ProjectHeader:w,ProjectGallery:C,ProjectInfo:K,ProjectRelatedProjects:lt},data:function(){return{project:{title:""},singleProjectHeader:{singleProjectTitle:"",singleProjectDate:"",singleProjectTag:""},projectImages:[{id:1,title:"",img:""}],projectInfo:{clientHeading:"",companyInfos:[],technologies:{title:"",techs:[]},projectDetailsHeading:"",projectDetails:[{details:""}]},relatedProject:{relatedProjectsHeading:"",relatedProjects:[]}}},metaInfo:function(){return{title:this.project.title,description:this.projectInfo.projectDetails[0].details,meta:[{name:"author",content:"Md. Abdullah"},{name:"title",content:"Portfolio of Abdullah"}],twitter:{title:this.project.title,description:this.projectInfo.projectDetails[0].details,card:"Summary",image:window.location.origin+""+this.projectImages[0].img},og:{title:this.project.title,description:this.projectInfo.projectDetails[0].details,url:window.location.href,image:window.location.origin+""+this.projectImages[0].img,site_name:"Abdullah Portfolio"}}},created:function(){o().replace(),this.getData(this.$route.params.id)},beforeRouteUpdate:function(t){this.getData(parseInt(t.params.id))},updated:function(){o().replace()},methods:{getData:function(t){this.project=it.Z.find((function(e){return e.id==t})),this.singleProjectHeader={singleProjectTitle:this.project.title,singleProjectDate:this.project.date,singleProjectCategory:this.project.category},this.projectImages=this.project.projectImages,this.projectInfo=this.project.projectInfo,this.relatedProject.relatedProjectsHeading="Related Projects",this.relatedProject.relatedProjects=this.filterRelatedProject()},filterRelatedProject:function(){var t=this;return it.Z.filter((function(e){var r=e.category.charAt(0).toUpperCase()+e.category.slice(1);return r.includes(t.project.category)&&e.id!=t.project.id})).slice(0,3)}}};const ot=(0,b.Z)(st,[["render",i]]);var nt=ot}}]);
//# sourceMappingURL=projects-legacy.4532b370.js.map