<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ReminderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        \App\Models\Reminder::factory(50)->create();
    }
}
