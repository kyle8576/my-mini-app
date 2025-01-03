declare global {
    interface Window {
      Telegram: {
        WebApp: {
          ready: () => void;
          MainButton: {
            text: string;
            show: () => void;
            onClick: (callback: () => void) => void;
            offClick: () => void;
          };
          initDataUnsafe: {
            user?: {
              id: number;
              first_name: string;
              last_name?: string;
              username?: string;
            };
          };
          close: () => void;
        };
      };
    }
  }
  
  export {};
  