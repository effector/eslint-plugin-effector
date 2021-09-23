import { createEvent, guard, merge } from "effector";

const event1 = createEvent();
const event2 = createEvent();

guard({ clock: merge([event1, event2]), filter: Boolean });
