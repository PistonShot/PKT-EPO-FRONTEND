
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import Index from '@/pages/index.vue'
import AboutView from '@/pages/AboutView.vue'
import Login from '@/pages/Login.vue'
import Dashboard from '@/pages/Dashboard.vue'
import PurchaseRequest from '@/pages/PurchaseRequest.vue'
import Invoice from '@/pages/Invoice.vue'
import Approval from '@/pages/Approval.vue'
import CreatePRForm from '@/pages/PR/CreatePRForm.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { onMounted } from 'vue'
const routes = [
  { path: '/', name: 'index', component: Index },
  { path: '/about', name: 'about', component: AboutView },
  { path: '/login', name: 'login', component: Login },
  { path: '/dashboard', name: 'dashboard', component: Dashboard },
  { path: '/purchase-request', name: 'Purchase Request', component: PurchaseRequest },
  { path: '/invoice', name: 'Invoice', component: Invoice },
  { path: '/approval', name: 'Approval', component: Approval },

  {path: '/purchase-request/create', name:'New PR', component:CreatePRForm}
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;
