const containerEl = document.querySelector(".activity-container");
containerEl.classList.add("invisible");

const fetchData = async () => {
  const url = "https://www.boredapi.com/api/activity/";

  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log("result", result);
    return result;
  } catch (error) {
    console.error("error", error);
    return error;
  }
};

const createTitle = (title) => {
  const h1 = document.createElement("h3");
  h1.textContent = title;
  return h1;
};

const createValueSpan = (value) => {
  const span = document.createElement("span");
  span.textContent = value;
  return span;
};

const createActivityDetailParagraph = (activity, value) => {
  const valueSpan = createValueSpan(value);

  const p = document.createElement("p");
  p.textContent = activity + ": ";
  p.appendChild(valueSpan);
  return p;
};

const createActivity = (activityDetail) => {
  containerEl.classList.remove("invisible");

  const activityEl = document.createElement("div");
  activityEl.classList.add("activity-card");

  activityEl.appendChild(createTitle(activityDetail.activity));
  activityEl.appendChild(
    createActivityDetailParagraph("Type", activityDetail.type)
  );
  activityEl.appendChild(
    createActivityDetailParagraph("Participants", activityDetail.participants)
  );
  activityEl.appendChild(
    createActivityDetailParagraph("Price", activityDetail.price)
  );
  activityEl.appendChild(
    createActivityDetailParagraph("Link", activityDetail.link)
  );
  activityEl.appendChild(
    createActivityDetailParagraph("Key", activityDetail.key)
  );

  containerEl.innerHTML = "";
  containerEl.appendChild(activityEl);
};

const renderActivity = async () => {
  const data = await fetchData();
  buttonEl.textContent = "Now click me again!";
  console.log("data", data);
  createActivity(data);
};

const buttonEl = document.getElementById("get-activity-button");
buttonEl.addEventListener("click", renderActivity);
