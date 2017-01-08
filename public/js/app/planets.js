
define(
	['jquery', 'knockout'],
	function($, ko, application) {

		function planets(params) {

			var self=this;

			var CONSTANTS={
				URLS:{
					GET:'api/planets'
				}
			};

			this.items=ko.observableArray([]);
			this.loaded=ko.observable(false);
			this.loading=ko.observable(false);

			this.planet=function(data) {
				data.show=ko.observable(false);

				data.distancetext=data.distance+' AU from the Sun';
				data.masstext=data.mass+' Earth masses';
				data.diametertext=data.diameter+' km';

				data.open=ko.pureComputed(
					function() {
						return this.show()?'open':'';
					},
					data
				);

				return data;
			};

			this.toggle=function(item) {

				item.show(!item.show());

			};

			this.get=function() {

				self.loading(true);

				/* Loads planets data */
				$.getJSON(
					CONSTANTS.URLS.GET,
					function(data) {

						var items=data.items;

						for (var i=0, ii=items.length;i<ii;i++) {

							self.items.push(
								new self.planet(items[i])
							);

						}
						self.loading(false);
						self.loaded(true);
					}
				);

			};

			this.get();

			return this;
		};

		return planets;
	}
);
