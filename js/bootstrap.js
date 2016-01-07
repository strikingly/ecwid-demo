import React from 'react'
import ReactDOM from 'react-dom'

class EcwidComponent extends React.Component {
	componentDidMount() {
		window.ecwid_script_defer = true;
		var script = document.createElement('script');
		script.charset = 'utf-8';
		script.type = 'text/javascript';
		script.src = 'https://app.ecwid.com/script.js?7780646&data_platform=strikingly';
		document.getElementById('my-store-7780646').appendChild(script);
		window._xnext_initialization_scripts = [{
		  widgetType: 'ProductBrowser',
		  id: 'productBrowser',
		  arg: ["categoriesPerRow=3","views=grid(3,3) list(10) table(20)","categoryView=grid","searchView=list","style=","responsive=yes","id=productBrowser"]
		}];
	}

	render() {
		return <div>
			<div id="my-store-7780646"></div>
			<div id="productBrowser"></div>
			<noscript>Your browser does not support JavaScript. Please proceed to <a href='https://app.ecwid.com/jsp/7780646/catalog'>HTML version of this store</a>
			</noscript>
		</div>
	}
}

class PageComponent extends React.Component {
	render() {
		return <div>This is another page</div>
	}
}

const content = document.getElementById('content')
document.getElementById('page1').addEventListener('click', () => {
	ReactDOM.render(<EcwidComponent/>, content)
})
document.getElementById('page2').addEventListener('click', () => {
	ReactDOM.render(<PageComponent/>, content)
})
ReactDOM.render(<EcwidComponent/>, content)
