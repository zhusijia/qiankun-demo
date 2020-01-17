import React from 'react';
import ReactDom from 'react-dom';
import MainPage from './pages/MainPage';
import SubAppContent from './pages/SubAppContent';
import 'zone.js';
import {
  registerMicroApps,
  runAfterFirstMounted,
  setDefaultMountApp,
  start
} from 'qiankun';

// function render(props) {
//   let content = 'Main Page';

//   if (props) {
//     content = props.appContent;
//   }
//   const container = document.getElementById('container');
//   ReactDom.render(<MainPage content={content} />, container);
// }

// function renderContainer2(props) {
//   let content = 'Main Page';

//   if (props) {
//     content = props.appContent;
//   }
//   const container = document.getElementById('container-2');
//   ReactDom.render(<MainPage content={content} />, container);
// }

function render() {
  const container = document.getElementById('container');
  ReactDom.render(<MainPage />, container);
}

function getActiveRule(routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
}

function initApp() {
  render();
}

function renderContainer1({ appContent, loading }) {
  const container = document.getElementById('container__1');
  ReactDom.render(<SubAppContent content={appContent} />, container);
}

function renderContainer2({ appContent, loading }) {
  const container = document.getElementById('container__2');
  console.log('===============renderContainer2', container);
  ReactDom.render(<SubAppContent content={appContent} />, container);
}

initApp();

registerMicroApps(
  [
    {
      name: 'sub-app-react',
      entry: '//localhost:6999',
      render: renderContainer2,
      activeRule: getActiveRule('/react')
    },
    {
      name: 'sub-app-angular',
      entry: '//localhost:7103',
      render: renderContainer1,
      activeRule: getActiveRule('/react')
    }
  ],
  {
    beforeLoad: [
      app => {
        console.log('before load', app);
      }
    ],
    beforeMount: [
      app => {
        console.log('before mount', app);
      }
    ],
    afterUnmount: [
      app => {
        console.log('after unload', app);
      }
    ]
  }
);

setDefaultMountApp('/react');
runAfterFirstMounted(() => console.info('first app mounted'));

start({ prefetch: true });
