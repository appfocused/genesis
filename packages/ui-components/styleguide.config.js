module.exports = {
  skipComponentsWithoutExample: true,
  components: 'src/components/**/index.ts',
  propsParser: require('react-docgen-typescript').parse,
  styles: {
    Playground: {
      preview: {
        background: '#424251'
      }
    }
  }
};
