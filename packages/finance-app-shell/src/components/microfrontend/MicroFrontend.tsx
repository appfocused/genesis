import * as React from 'react';

interface Props {
  name: string;
  host: string;
  history?: History;
  theme?: any;
  w?: Window;
  d?: Document;
}

export class MicroFrontend extends React.Component<Props> {
  componentDidMount() {
    const { name, host, d = document } = this.props;
    const scriptId = `micro-frontend-script-${name}`;

    if (d.getElementById(scriptId)) {
      this.renderMicroFrontend();
      return;
    }

    fetch(`${host}/manifest.json`, {
      headers: {
        'Content-Type': 'application/json',
        Origin: 'http://localhost:8081'
      }
    })
      .then(res => res.json())
      .then(manifest => {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = `${host}/${manifest['main.js']}`;
        script.onload = this.renderMicroFrontend.bind(this);
        document.head.appendChild(script);
      });
  }

  componentDidUpdate(prevProps: Props) {
    if (JSON.stringify(prevProps.theme) !== JSON.stringify(this.props.theme)) {
      this.renderMicroFrontend();
    }
  }

  componentWillUnmount() {
    const { name, w = window } = this.props;
    const unmountFn = (w as any)[`unmount${name}`];

    if (unmountFn) {
      unmountFn(`${name}-container`);
    }
  }

  renderMicroFrontend() {
    const { name, w = window, history, theme } = this.props;

    const renderFn = (w as any)[`render${name}`];

    if (renderFn) {
      renderFn(`${name}-container`, history, theme);
    }
  }

  render() {
    return <div id={`${this.props.name}-container`} />;
  }
}
