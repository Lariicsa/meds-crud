<template>
	<div class="content">
		<h2>Editar</h2>
		{{med.nombre}}
		<form @submit.prevent="editMed(med)">
			<input type="text" v-model="med.nombre">
			<button type="submit">Actudalizar</button>
		</form>
	</div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
	name: 'Editar',
	data(){
		return{
			id: this.$route.params.id
		}
	},
	methods:{
		...mapActions(['getMed', 'editMed'])
	},
	created(){
		this.getMed(this.id)
	},
	computed: {
		...mapState(['med'])
	}
}
</script>
