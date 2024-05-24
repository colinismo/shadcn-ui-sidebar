import Link from "next/link";
import { SearchBar } from "@/components/searchbar/search";
import { Button } from "@/components/ui/button";
import { ContentLayout } from "@/components/admin-panel/content-layout";

export default function SearchPage() {

    return ( 
        <ContentLayout title="VectorSearch">
            <div>Complete Vector Search</div>
            <div>
            <SearchBar /><Button />
            </div>

           
        </ContentLayout>
    );


}