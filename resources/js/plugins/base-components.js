export default {
    install(Vue) {
        let requireContext = require.context(
            "../components",
            false,
            /Base\w*\.vue$/
        );
        // console.log(requireContext.keys())

        requireContext.keys().forEach(filename => {
            let name = filename.replace(/^.*\//, "").replace(/\.\w*$/, "");
            let component = requireContext(filename);
            // console.log(filename,name,component)
            component = component.default || component;
            Vue.component(component.name || name, component);
        });
    }
};
