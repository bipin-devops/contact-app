export const normalizePhone = (phoneNumber) => {
  let phone = phoneNumber.split(" ");
  phone = phone[0].replace(/\D/g, "");
  if (phone.length === 10) {
    phone = `${phone.slice(0, 4)}-${phone.slice(4, 7)}-${phone.slice(7)}`;
  } else {
    phone = `${phone.slice(0, 1)}-${phone.slice(1, 4)}-${phone.slice(
      4,
      7
    )}-${phone.slice(7)}`;
  }
  return phone;
};
