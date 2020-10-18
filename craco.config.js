const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': 'rgb(250,198,1)',
              '@link-color': '#1890ff', // link color
              '@success-color': '#52c41a', // success state color
              '@warning-color': '#faad14', // warning state color
              '@error-color': '#f5222d', // error state color
              '@font-family': `'Poppins', sans-serif`, 
              '@font-size-base': '14px', // major text font size
              '@heading-color': 'rgba(0, 0, 0, 0.85)', // heading text color
              '@text-color': 'rgba(0, 0, 0, 0.65)', // major text color
              '@text-color-secondary': 'rgba(0, 0, 0, 0.45)', // secondary text color
              '@disabled-color': 'rgba(0, 0, 0, 0.25)', // disable state color
              '@border-radius-base': '2px', // major border radius
              '@border-color-base': '#d9d9d9', // major border color
              '@box-shadow-base': '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)', // major shadow for layers,
              '@layout-body-background': 'rgb(231,230,230)',
              '@table-header-bg': 'rgb(77,77,77)',
              '@table-header-color': '#fff',
              '@tabs-title-font-size': '16px',
              '@btn-border-width': '2px',
              '@btn-font-weight': 600,

            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};