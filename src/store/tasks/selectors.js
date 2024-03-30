export const selectTasks = (reduxState) => reduxState.task.tasks;
export const selectLoading = (reduxState) => reduxState.task.loading;
export const selectError = (reduxState) => reduxState.task.error;
