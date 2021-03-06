import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from './webpack.config.babel';

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  stats: { colors: true },
  historyApiFallback: true
}).listen(3000, 'localhost', (err, result) => {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});
