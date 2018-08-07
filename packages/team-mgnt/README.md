# Team Management

### Redux Notes

To add to the redux store follow these steps:

 1. Update the global state in `src/types/index.tsx` and add the new state variables to `IStoreState`
 2. Add the action names to `src/constants/index.tsx`
 3. Add action types and corresponding functions to `src/actions/index.tsx` 
 4. Create a component container to connect the component to the store in `src/containers/<Component>.tsx`
 5. Add reducer logic to update the global state in `src/reducers/index.tsx`



This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
