<script>
import Vue from "vue";
import VueLaravelDatatable from "@/vue-laravel-datatable.vue";
import * as dataSource from "./sampleObject.json"

export default Vue.extend({
	name: "ServeDev",
	components: {
		VueLaravelDatatable,
	},

	data() {
		return {
			dataSource,

			keyword: "",
			limit: "",
			columns: [
				{ name: "#", sortName: "id", sortVal: "asc" },
				{ name: "Date", sortName: "date", sortVal: "asc" },
				{ name: "Branch", sortName: "branch", sortVal: "asc" },
				{ name: "Student Name", sortName: "name", sortVal: "asc" },
				{ name: "Inquired Course", sortName: "course", sortVal: "asc" },
				{ name: "Created By", sortName: "createdUser", sortVal: "asc" },
				{ name: "Actions" },
			],
		};
	},
  
});
</script>

<template>
	<div id="app">
		<vue-laravel-datatable :columns="columns" :dataSource="dataSource.default">
			<template v-slot:tbody="{ item: { item } }">
				<td>{{ item.id }}</td>
				<td>{{ item.date }}</td>
				<td>{{ item.branch }}</td>
				<td>{{ item.name }}</td>
				<td>{{ item.course }}</td>
				<td>{{ item.createdUser }}</td>
			</template>
		</vue-laravel-datatable>
	</div>
</template>
