<script setup>
import ContentCard from "../components/ContentCard.vue"
</script>

<template>
    <ContentCard title="Portfolio">
        <div class="md:grid md:grid-cols-3 gap-2">
            <div
                class="bg-transparent dark:border-2 overflow-hidden dark:border-neutral-600 rounded-md image-full w-full shadow-xl">
                <figure>
                    <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
                </figure>
                <div class="card-body bg-none">
                    <p>Web Development</p>
                    <h2 class="card-title font-title">Insurance System</h2>
                    <div class="card-actions justify-end">
                        <label class="btn btn-sm btn-primary" for="my_modal_3">Learn More</label>
                    </div>
                </div>
            </div>
        </div>
    </ContentCard>

    <!-- detail portfolio modal -->
    <input type="checkbox" id="my_modal_3" class="modal-toggle" />
    <dialog id="my_modal_3" class="modal modal-bottom">
        <div class="modal-box bg-white dark:bg-neutral-800 m-0 rounded-none lg:px-24 ">
            <form method="dialog">
                <label for="my_modal_3" class="btn btn-sm btn-circle btn-ghost absolute right-7">✕</label>
            </form>
            <div class="flex items-center">
                <h3 class="text-lg font-bold text-red-500 mx-auto">Insurance System</h3>
            </div>
            <div class="divider divider-error"></div>
            <div class="md:grid md:grid-cols-2 mx-auto mb-4 font-semibold text-title">
                <div>
                    <p>Project : Web Development</p>
                    <p>Tech : Laravel, Tailwind, Vue.js</p>
                </div>
                <div>
                    <p>Client : PT Asuransi Syariah Al-Amin</p>
                    <p>Demo : www.alamin.pram.web.id </p>
                </div>
            </div>

            <p class="text-title mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur officiis incidunt ratione repellat dicta, veniam iure facilis quisquam nesciunt quos nostrum qui? Minima veniam, eligendi voluptas quaerat rem quidem soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam magnam, esse dignissimos iste iusto, facilis at delectus quo et commodi sed reprehenderit quidem illo quas harum molestiae quisquam. Officiis, alias!</p>
            <figure class="bg-neutral-700">
                <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes" class="h-96 mx-auto" />
            </figure>
        </div>
    </dialog>

</template>