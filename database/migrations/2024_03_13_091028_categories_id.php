<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('product', function (Blueprint $table) {
            // $table->foreignId('categories_id')->constrained('categories')->onDelete('cascade');
            $table->string('category_name')->nullable();
            $table->foreign('category_name')->references('name')->on('categories')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('product', function (Blueprint $table) {
            // $table->dropColumn('categories_id');
            $table->dropForeign(['category_name']); // Drop the foreign key constraint
            $table->dropColumn('category_name'); // Drop the 'category_name' column
       
        });
    }
};
