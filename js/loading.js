export function initLoading() {

    const loading = document.getElementById("loading-screen");

    if (!loading) return;

    setTimeout(() => {

        loading.style.opacity = "0";

        setTimeout(() => {

            loading.style.display = "none";

        }, 1000);

    }, 3000);

}