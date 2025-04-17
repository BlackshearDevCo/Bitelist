// PAGE ROUTES
export const getHomeRoute = () => "/";

export const getFeedRoute = () => "/feed";

export const getRecipeBookRoute = () => "/my-book/saved-recipes";

export const getNewRecipeRoute = () => "/recipes/new";

export const getProfileRoute = (username: string) => `/${username}`;

export const getProfileSettingsRoute = () => "/profile/settings";
