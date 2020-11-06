const loadScript = (id: string, src: string): Promise<void> =>
  new Promise((resolve) => {
    const existScript = document.getElementById(id);

    if (!existScript) {
      const script = document.createElement('script');
      script.id = id;
      script.src = src;
      script.onload = () => {
        resolve();
      };
      document.head.appendChild(script);
    } else {
      resolve();
    }
  });

export default loadScript;
