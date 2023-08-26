type NoticeType = "success" | "error" | "info" | "warning" | "warn" | "loading";
export const Notice = (type: NoticeType, title: string, desc: string) => {
  const notice = (window as any).$Notice;
  return notice.error({
    title: "Notification title",
    desc: !desc
      ? ""
      : "Here is the notification description. Here is the notification description. ",
  });
};
