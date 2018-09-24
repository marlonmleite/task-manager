import { injectGlobal } from 'styled-components'

export default injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600');

  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  #root {  
    width: 100%;
    height: 100%;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit;
    font-size: 100%;
    margin: 0;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  p {
    margin-top: 0;
    margin-bottom: 0;
    line-height: 1.5;
  }

  ul,
  li {
    margin: 0;
    padding: 0;
  }

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
    background-color: #F5F5F5
  }
  
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
    background-color: #F5F5F5;
  }
  
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #9a9a9a; 
  }
`
