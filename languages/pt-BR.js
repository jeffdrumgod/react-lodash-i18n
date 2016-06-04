'use strict';
try {
	window.IFC_I18N = window.IFC_I18N || {};
	window.IFC_I18N['pt-BR'] = window.IFC_I18N['pt-BR'] || {};
	window.IFC_I18N['pt-BR'].example = {
		app: {
			geoLocation: {
				failResultGetByCep: 'Não foi possível obter as coordenadas. Por favor, verifique se seu CEP está correto e tente novamente.',
				failRequestGetByCep: 'Não foi possível realizar a busca das coordenadas. Por favor, verifique se seu CEP está correto e tente novamente.',
			},
			shipping: {
				time: {
					day: 'dia útil',
					days: 'dias úteis',
					today: 'hoje'
				},
				free: 'Frete Grátis',
				waiting: 'A calcular',
				method: {
					SHP: 'Buscar em ponto de retirada'
				}
			}
		}
	};
} catch(e) {
	console.log('Fail on locale pt-BR', e);
}