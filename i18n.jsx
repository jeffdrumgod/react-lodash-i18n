/* global define, _ */
/** @jsx React.i18n */
define(
	function (require) {
		'use strict';
		// TODOs:
		//  - replaces with params in function "t"
		// 	- currency format
		// 	- date format
		// 	- documentation
		// 	- show error logs
		var i18n = {
			// translate function
			t: function(key, args) {
				args = args || {};
				if (!_.isString(key)) {
					return '';
				}
				var lang = i18n.locale.get();

				// se receber chave de linguagem
				if (_.has(lang, key)) {
					return _.result(lang, key, args.defaultValue);
				}
				// se não encontrar a chave
				if (!!i18n.currents.fallback) {
					// verifica se consegue encontrar na linguagem default caso seja diferente
					if (i18n.defaults.locale !== i18n.currents.locale) {
						lang = i18n.locale.get();
						if (_.has(lang, key)) {
							return _.result(lang, key);
						}
					}
					// caso contrário retorna a chave
					return (args.hasOwnProperty('defaultValue') ? args.defaultValue : key);
				}
			},
			defaults: {
				locale: 'pt-BR',
				windowVariableI18n: 'IFC_I18N'
			},
			currents: {
				locale: false,
				fallback: true // fallback to use default lang if don't exist current lang
			},
			locale: {
				// list all languages available
				list: function() {
					return (!!window[i18n.defaults.windowVariableI18n] ? window[i18n.defaults.windowVariableI18n] : {});
				},
				// get or set current locale
				current: function(localeName) {
					if (!!localeName) {
						return i18n.locale.set(localeName);
					}
					if (!!i18n.currents.locale) {
						return i18n.currents.locale;
					}
					return i18n.defaults.locale;
				},
				// get language
				get: function(localeName) {
					var list = i18n.locale.list();
					localeName = localeName || i18n.locale.current();
					if (!!list[localeName]) {
						return list[localeName];
					}
					if (!!i18n.currents.fallback) {
						return list[i18n.defaults.locale];
					}
					return {};
				},
				// set language
				set: function(localeName) {
					var list = i18n.locale.list();
					if (!!list[localeName]) {
						i18n.currents.locale = localeName;
					}
					if (!!i18n.currents.fallback) {
						i18n.currents.locale = i18n.defaults.locale;
					}
					return i18n;
				}
			}
		};

		return i18n;
	}
);