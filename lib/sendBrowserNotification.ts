export const sendBrowserNotification = (title: string, message: string) => {
  if (Notification.permission === "denied") {
    return;
  }
  if (Notification.permission === "granted") {
    new Notification(title, {
      body: message,
    });
  } else if (Notification.permission === "default") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        new Notification(title, {
          body: message,
        });
      } else {
        return;
      }
    });
  }
};
