
requirejs.config(
	{
		baseUrl: 'js/lib',
		paths: {
			app: '../app',
			templates: '../../templates'
		}
	}
);

require(
	['jquery', 'knockout', 'app/application'],
	function($, ko, application) {

		var settings={
			components:[
				{name:'planetslist', viewModel:  { require: 'app/planets' },	template: { require: 'text!templates/app/planetslist.html' } }
			],
			parameters:{
				planetsParameters:{}
			}
		};

		application.applicationInitialise(settings);

	}
);
