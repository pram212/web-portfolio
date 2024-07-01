<script setup>
import { ref } from "vue";
import ContentCard from "../components/ContentCard.vue"
const portfolio = [
    {
        image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
        type: 'Web Development',
        name: 'Insurance System',
        tech: "Laravel, Vue.js, Tailwind",
        client: "PT Asuransi Syariah Al-Amin",
        demo: "www.dev.alamincore.com"
    },
    {
        image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
        type: 'Web Development',
        name: 'Finance System',
        tech: "Laravel, Bootstrap, Jquery",
        client: "PT Asuransi Nasional Indonesia",
        demo: "www.akui-dev.nasionalre.com"
    },
    {
        image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
        type: 'Web Development',
        name: 'ERP System',
        tech: "PHP, Mysql, Bootstrap",
        client: "Cimb Niaga",
        demo: "dbss.cimbiaga.com"
    },
    {
        image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
        type: 'Web Development',
        name: 'Voting System',
        tech: "Laravel, Bootsrap, Jquery",
        client: "-",
        demo: "www.voting.pram.web.id"
    },
    {
        image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg",
        type: 'Web Development',
        name: 'Stock Management System',
        tech: "Codeigniter, Bootsrap, Jquery",
        client: "PT Citra Indonesia",
        demo: "-"
    }
]

const detail = ref(Object)

const getDetail = (index) => {
    detail.value = portfolio[index]
}
</script>

<template>
    <ContentCard title="Portfolio">
        <div class="md:grid md:grid-cols-3 md:gap-4">
            <div v-for="(item, index) in portfolio" :key="index"
                class="bg-transparent dark:border-2 overflow-hidden dark:border-neutral-600 rounded-md image-full w-full shadow-xl">
                <figure>
                    <img :src="item.image" alt="Shoes" />
                </figure>
                <div class="card-body bg-none">
                    <p class="text-muted font-semibold">{{ item.type }}</p>
                    <h2 class="card-title text-title">{{ item.name }}</h2>
                    <div class="card-actions justify-end">
                        <label class="btn btn-sm btn-primary" for="my_modal_3" @click="getDetail(index)" >Learn More</label>
                    </div>
                </div>
            </div>
        </div>
    </ContentCard>

    <!-- detail portfolio modal -->
    <input type="checkbox" id="my_modal_3" class="modal-toggle" />
    <dialog id="my_modal_3" class="modal modal-bottom bg-white bg-opacity-30">
        <div class="modal-box bg-gradient-to-b from-purple-200 to-white dark:bg-gradient-to-b dark:from-neutral-800 dark:to-neutral-900 m-0 rounded-none lg:px-24 ">
            <form method="dialog">
                <label for="my_modal_3" class="btn btn-sm btn-circle btn-ghost absolute right-7">✕</label>
            </form>
            <div class="flex items-center">
                <h3 class="text-lg font-bold text-red-500 mx-auto">{{ detail.name }}</h3>
            </div>
            <div class="divider divider-error"></div>
            <div class="md:grid md:grid-cols-2 mx-auto mb-4 font-semibold text-title">
                <div>
                    <p>Project : {{ detail.type }}</p>
                    <p>Tech : {{ detail.tech }}</p>
                </div>
                <div>
                    <p>Client : {{ detail.client }}</p>
                    <p>Demo : {{ detail.demo }} </p>
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