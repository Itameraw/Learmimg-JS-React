function printSeasonByMonth(month) {
  const moth = ["SEPTEMBER", "NOVEMBER", "JULY", "APRIL"];
  for (let i = 0; i < moth.length; i++) {
    const element = moth[i];
    if (element == month) {
      switch (month == element) {
        case element == "SEPTEMBER":
          {
            console.log("autumn");
          }
          break;
        case element == "NOVEMBER":
          {
            console.log("autumn");
          }
          break;
        case element == "JULY":
          {
            console.log("summer");
          }
          break;
        case element == "APRIL":
          {
            console.log("spring");
          }
          break;
      }
    }
  }
}
printSeasonByMonth("SEPTEMBER");
printSeasonByMonth("NOVEMBER");
printSeasonByMonth("JULY");
printSeasonByMonth("APRIL");
